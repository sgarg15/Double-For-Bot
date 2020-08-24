const Discord = require('discord.js');

module.exports = {
	name: 'wakeup',
	description: 'WakeUp Server!',
	execute(message, args) {
		//gets a random users ID
		function getRandomUser(){
			//put all members in an array
			let user = message.guild.members.cache.array();
			//get a random number
			let randomUser = Math.floor(Math.random() * user.length)
			//pick a random member
			return user[randomUser]
		}

		//If no args then ping only one random user
		if (!args.length) {
			message.channel.send(`${getRandomUser()}`).then( message => {
			//delete bot and user message to make it anonymous
				message.delete({ timeout: 1000 })			
			})
			message.delete({ timeout: 1000 });
			return
		}

		//ping random person args[0] amount of times
		message.delete({ timeout: 1000 });
		for (let i = 0; i < args[0]; i++) {
			message.channel.send(`${getRandomUser()}`).then( message => {
				message.delete()			
			})
		}
	},
};