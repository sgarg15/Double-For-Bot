//require the modules needed
const Discord = require('discord.js');
const dotenv = require('dotenv').config();

//create a new Discord client
const client = new Discord.Client();

//get the bot token from .env file
const botToken = process.env.DISCORD_TOKEN;
const prefix = "!";

//login to Discord with bot token
client.login(botToken);
console.log("Bot Logged In");

//event which triggers only once after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	//if the message doesn't start with prefix and or is sent by bot exit early
	if (!message.content.startsWith(prefix) || message.author.bot){
		return;
	}

	//slices prefix and trim and slipts the message
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	//check message and send back a reply based on the message
	if(command === 'args-info'){
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}

		message.channel.send(`Arguments ${args}`)
	}
	if(command === 'ping'){
		message.channel.send('Pong');
	} else if(command === 'beep'){
		message.channel.send('Boop');
	} else if(command === 'server'){
		if(message.guild.icon === null){
			message.channel.send(`Icon: There is no icon\nServer Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}\nCreated On: ${message.guild.createdAt}`);
		} else{
			message.channel.send(`Icon: ${message.guild.icon}\nServer Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}\nCreated On: ${message.guild.createdAt}`);
		}
	}
});
