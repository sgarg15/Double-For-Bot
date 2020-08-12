//require the modules needed
const Discord = require('discord.js');
const dotenv = require('dotenv').config();

//create a new Discord client
const client = new Discord.Client();

//get the bot token from .env file
const botToken = process.env.DISCORD_TOKEN;

//login to Discord with bot token
client.login(botToken);
console.log("Bot Logged In");

//event which triggers only once after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	//check message and send back a reply based on the message
	if(message.content == '!ping'){
		message.channel.send('Pong');
	}

	if(message.content == '!beep'){
		message.channel.send('Boop');
	}
});
