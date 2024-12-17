const { REST, Routes } = require('discord.js');
require("dotenv").config()
const fs = require('node:fs');
const path = require('node:path');

const CLIENT_ID = process.env.CLIENT_ID
const TOKEN = process.env.DISCORD_TOKEN

const rest = new REST().setToken(TOKEN);


// Gets all the categories inside "./commands/"
const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

// Register every file inside every category
for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);

        // Push if the script structure is correct
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.warn(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}



(async () => {
	try {
		console.log(`[INFO] Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationCommands(CLIENT_ID),
			{ body: commands },
		);

		console.log(`[INFO] Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();
