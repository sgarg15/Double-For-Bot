const Discord = require('discord.js');
const got = require('got');

module.exports = {
	name: 'reddit',
	description: 'Sub Reddits!',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments. Please use the help command to learn more, ${message.author}!`);
		}

		switch(args[0].toLowerCase()){
			case 'politics':
				got('https://www.reddit.com/r/politics/random.json').then(response => {
					let content = JSON.parse(response.body);
					var title = content[0].data.children[0].data.title;
					let politic = content[0].data.children[0].data.url;
					message.channel.send('**' + title + '**');
					message.channel.send(politic)
				}).catch(console.error);
				break;
			case 'meme':
				got('https://www.reddit.com/r/memes/random/.json').then(response => {
					let content = JSON.parse(response.body);
					let memeImage = content[0].data.children[0].data.url;
					message.channel.send(memeImage)
				}).catch(console.error);
				break;
			case 'joke':
				got('https://www.reddit.com/r/jokes/random/.json').then(response => {
					let content = JSON.parse(response.body);
					var title = content[0].data.children[0].data.title;
					let joke = content[0].data.children[0].data.selftext;
					message.channel.send('**' + title + '**');
					message.channel.send(joke)
				}).catch(console.error);
				break;
			case 'facts':
				got('https://www.reddit.com/r/interestingasfuck/random.json').then(response => {
					let content = JSON.parse(response.body);
					var title = content[0].data.children[0].data.title;
					let amazem = content[0].data.children[0].data.url;
					message.channel.send('**' + title + '**');
					message.channel.send(amazem)
				}).catch(console.error);
				break;
			case 'learn':
				got('https://www.reddit.com/r/todayilearned/random.json').then(response => {
					let content = JSON.parse(response.body);
					var title = content[0].data.children[0].data.title;
					let learn = content[0].data.children[0].data.url;
					message.channel.send('**' + title + '**');
					message.channel.send(learn)
				}).catch(console.error);
				break;
		}
	},
};