#!/usr/bin/env node
// irc client stuff
var answers = [ 'Signs point to yes.',
				'Yes.',
				'Reply hazy, try again.',
				'Without a doubt.',
				'My sources say no.',
				'As I see it, yes.',
				'You may rely on it.',
				'Concentrate and ask again.',
				'Outlook not so good.',
				'It is decidedly so.',
				'Better not tell you now.',
				'Very doubtful.',
				'Yes - definitely.',
				'It is certain.',
				'Cannot predict now.',
				'Most likely.',
				'Ask again later.',
				'My reply is no.',
				'Outlook good.',
				'Don\'t count on it.'];

var irc_config = require('./config');
var irc = require('irc');
var client = new irc.Client(irc_config.server,irc_config.nick,irc_config.options);

// begin listening for messages
client.addListener('message#',function (from, to, text, message) {
	// if message contains $NICK:
	if (text.match(RegExp(irc_config.nick+':'))) {
		client.say(to,answers[Math.floor(Math.random()*answers.length)]);
	}
}); 

// listen for invites
client.addListener('invite',function(channel, from, message) {
	client.join(channel);
});

