const Discord = require('discord.js');

const prefix = "!";

module.exports = {
	name: 'help',
	description: 'Ask For Help!',
	execute(message, args) {
		const helpEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Here are the list of all the commands')
		.addField(`${prefix}reddit news`, 'To view news', false)
		.addField(`${prefix}reddit meme`, `To view a meme`, false)
		.addField(`${prefix}reddit joke`, `To view a joke`, false)
		.addField(`${prefix}reddit facts`, `To view a fact`, false)
		.addField(`${prefix}reddit learn`, `To learn to something new`, false)
		.addField(`${prefix}reddit eli5`, `To get something explained`, false)
		.addField(`${prefix}ping`, `Pong`, false)
		.addField(`${prefix}pong`, `Beep`, false)
		.addField(`${prefix}server`, `To view information about the server`, false)
		.setFooter('Note: This bot is a WIP. Expect frequent updates!')
		.setTimestamp()
		message.channel.send(helpEmbed);
	},
};