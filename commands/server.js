const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Server!',
	execute(message, args) {
		if(message.guild.icon === null){
			message.channel.send(`Icon: There is no icon\nServer Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}\nCreated On: ${message.guild.createdAt}`);
		} else{
			message.channel.send(`Icon: ${message.guild.icon}\nServer Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}\nCreated On: ${message.guild.createdAt}`);
		}
	},
};