const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Server!',
	execute(message, args) {
		const serverEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle(`Information about ${message.guild.name}`)
		.addField('Region', `${message.guild.region}`)
		.addField('Members', `${message.guild.memberCount}`)
		.addField('Created', `${message.guild.createdAt}`)
		.setTimestamp()
		const icon = message.guild.iconURL();
		if(icon){
			serverEmbed.setThumbnail(icon);
		}
		message.channel.send(serverEmbed);
	},
};