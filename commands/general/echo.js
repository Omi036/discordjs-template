const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Prints out whatever you say')
        .addStringOption(option => 
            option 
                .setName("text")
                .setDescription("Text to say")
                .setRequired(true)),
                
	async execute(interaction) {
        const text = interaction.options.getString("text")
		await interaction.reply({ content: text });
	},
};
