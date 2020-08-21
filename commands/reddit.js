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
			case 'news':
			const newsEmbed = new Discord.MessageEmbed()
				got('https://www.reddit.com/r/politics/random.json').then(response => {
					let content = JSON.parse(response.body);
					var newstitle = content[0].data.children[0].data.title;
					let newsURL = content[0].data.children[0].data.url;
					newsEmbed.addField(`${newstitle}`);
					message.channel.send(newsEmbed)
					message.channel.send(newsURL)
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
					var jokeTitle = content[0].data.children[0].data.title;
					let jokeText = content[0].data.children[0].data.selftext;
					message.channel.send('**' + jokeTitle + '**');
					message.channel.send(jokeText)
				}).catch(console.error);
				break;
			case 'facts':
				got('https://www.reddit.com/r/interestingasfuck/random.json').then(response => {
					let content = JSON.parse(response.body);
					var factTitle = content[0].data.children[0].data.title;
					let factURL = content[0].data.children[0].data.url;
					message.channel.send('**' + factTitle + '**');
					message.channel.send(factURL)
				}).catch(console.error);
				break;
			case 'learn':
				got('https://www.reddit.com/r/todayilearned/random.json').then(response => {
					let content = JSON.parse(response.body);
					var learnTitle = content[0].data.children[0].data.title;
					let learnURL = content[0].data.children[0].data.url;
					message.channel.send('**' + learnTitle + '**');
					message.channel.send(learnURL)
				}).catch(console.error);
				break;
			case 'eli5':
				got('https://www.reddit.com/r/explainlikeimfive/random.json').then(response => {
					let content = JSON.parse(response.body);
					var eli5Title = content[0].data.children[0].data.title;
					let eli5URL = content[0].data.children[0].data.url;
					message.channel.send('**' + eli5Title + '**');
					message.channel.send(eli5URL)
				}).catch(console.error);
				break;
		}
	},
};