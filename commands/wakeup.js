const Discord = require('discord.js');

module.exports = {
	name: 'wakeup',
	description: 'WakeUp Server!',
	execute(message, args) {
		function getRandomUser(){
			let user = message.guild.members.cache.array();
			let randomUser = Math.floor(Math.random() * user.length)
			return user[randomUser]
		}
		if (!args.length) {
			message.channel.send(`${getRandomUser()}`);
			return
		}

		var i;
		for (i = 0; i < args[0]; i++) {
			message.channel.send(`${getRandomUser()}`);
		}
	},
};