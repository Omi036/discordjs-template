const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Prints out the client latency'),

	async execute(interaction) {
        const latency = Date.now() - interaction.createdTimestamp
        await interaction.reply({ content: `🏓 Pong!: ${latency}ms` })
	},
};
