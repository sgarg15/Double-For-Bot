const Discord = require('discord.js');
const client = require('../index.js');

module.exports = {
	name: 'wakeup',
	description: 'WakeUp Server!',
	execute(message, args) {
		let userToPing = args[0];
		let numberOfTimes = args[1];
		let numberOfTimesDone = 0;
		let pingSystem;

		if(args.length != 2){
			message.channel.send(`You didn't provide any arguments. Please use the help command to learn more, ${message.author}! `);
			return;
		}

		function sendPingMessage(){
			numberOfTimesDone++;
			message.channel.send(`${userToPing}`).then( message => {
				message.delete()			
			})

			if(numberOfTimesDone == numberOfTimes){
				clearInterval(pingSystem);
				return;
			}
		}
		if(message.mentions.has(client.users.cache.get("403744585970352139"))){
			message.channel.send(`You can't ping the creator`);
			return;
		}
		
		if(numberOfTimes <= 15){
			message.delete();
			pingSystem = setInterval(sendPingMessage, 3000);
		} else{
			message.channel.send(`You can't ping more than 15 times`);
		}
	},
};