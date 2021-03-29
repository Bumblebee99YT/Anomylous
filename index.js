const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');

const prefix = 'a!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online');
    client.user.setActivity("with your life", {
        type: 'PLAYING'
    });

    client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot)return;
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
            if(command === 'hi'){
                message.channel.send("☟︎♏︎●︎●︎□︎ ❄︎♒︎♏︎❒︎♏︎");
            }
            else if(command === 'ping'){
                client.commands.get('ping').execute(message, args, Discord);
            }
            else if(command === 'help'){
                client.commands.get('help').execute(message, args, Discord);
            }
            else if(command === 'info'){
                client.commands.get('info').execute(message, args, Discord);
            }
            else if(command === 'kick'){
                client.commands.get('kick').execute(message, args, Discord, client);
            }
            else if(command === 'ban'){
                client.commands.get('ban').execute(message, args, Discord, client);
            }
            else if(command === 'mute'){
                client.commands.get('mute').execute(message, args, Discord, client);
            }
            else if(command === 'unmute'){
                client.commands.get('unmute').execute(message, args, Discord, client);
            }
            else if(command === 'clear'){
                client.commands.get('clear').execute(message, args);
            }
            else if(command === 'meme'){
                client.commands.get('meme').execute(message, args, Discord);
            }
            else if(command === 'invites'){
                client.commands.get('invites').execute(message, args, Discord);
            }
            else if(command === 'avatar'){
                client.commands.get('avatar').execute(message, args, Discord);
            }
            else if(command === 'say'){
                client.commands.get('say').execute(message, args, client, Discord);
            }
            else if(command === 'hug'){
                client.commands.get('hug').execute(message, args, client, Discord);
            }
            else if(command === 'pfp'){
                client.commands.get('pfp').execute(message, args, client);
            }
    });
});

client.login(config.token);