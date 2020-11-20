const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Nyxbot appears from the realm!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'offering'){
        client.commands.get('offering').execute(message, args);
    } else if (command == 'creator'){
        client.commands.get('creator').execute(message, args);
    } else if (command == 'timeout'){
        client.commands.get('timeout').execute(message, args);
    } else if (command == 'drink'){
        client.commands.get('drink').execute(message, args);
    } else if (command == 'fortune'){
        client.commands.get('fortune').execute(message, args);
    }
})









client.login('NzY1MzExOTk3NjAwMzMzOTA1.X4S-Vw.Q_4EEuln9py4VM9bBaWTsE_UP7I')