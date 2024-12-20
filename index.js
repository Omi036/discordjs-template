const { Client, Collection, GatewayIntentBits } = require('discord.js');
require("dotenv").config()
const fs = require('node:fs');
const path = require('node:path');

const TOKEN = process.env.DISCORD_TOKEN

// Creates the client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Appends all the commands
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// Triggers on bot ready
client.once("ready", () => {
    console.log("[INFO] Client is alive!")
})


// Triggers when a slashcommand is made
client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    // Gets the command
	const command = interaction.client.commands.get(interaction.commandName);

    // If it doesn't exist
	if (!command) {
		console.error(`[ERROR] No command matching ${interaction.commandName} was found.`);
		return;
	}

    // Executes and handles the errors
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
})

client.login(TOKEN)