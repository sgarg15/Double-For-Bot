//require the modules needed
const fs = require('fs');
const Discord = require('discord.js');
const dotenv = require('dotenv').config();
const got = require('got');

//create a new Discord client
const client = new Discord.Client();
module.exports = client;
client.commands = new Discord.Collection();

//retrieves every file in command folder and excludes non-js files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//requires all the files in the commands folder
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//get the bot token from .env file
const botToken = process.env.DISCORD_TOKEN;
const prefix = "?";

//login to Discord with bot token
client.login(botToken);
console.log("Bot Logged In");

//event which triggers only once after logging in
client.once('ready', () => {
	//client.user.setStatus('invisible')
	console.log('Ready!');
});

client.on('message', message => {
	//if the message doesn't start with prefix and or is sent by bot, exit early
	if (!message.content.startsWith(prefix) || message.author.bot){
		return;
	}

	//slices prefix and trim and slipts the message
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	//check message and send back a reply based on the message

	//check if theres a command with that name
	if (!client.commands.has(command)) return;

	//If there is, get and execute it, if error console and reply
	try{
		client.commands.get(command).execute(message, args);
	} catch(error){
		console.error(error);
		message.reply('There was an issue running the command please try again or contact the creator!');
	}
});