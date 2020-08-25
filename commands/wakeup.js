const Discord = require('discord.js');
const client = require('C:/Users/apnas/OneDrive - School District No. 36 (Surrey)/Documents/Double-For-Bot/index.js');

module.exports = {
	name: 'wakeup',
	description: 'WakeUp Server!',
	execute(message, args) {
		if(args.length != 2){
			message.channel.send(`You didn't provide any arguments. Please use the help command to learn more, ${message.author}! `);
			return;
		}

		let userToPing = args[0];
		let numberOfTimes = args[1];

		if(message.mentions.has(client.users.cache.get("403744585970352139"))){
			message.channel.send(`You can't ping the creator`);
			return;
		}
		
		message.delete();
		for (let i = 0; i < args[1]; i++) {
			message.channel.send(`${userToPing}`).then( message => {
				message.delete()			
			})
		}
	},
};