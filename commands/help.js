module.exports = {
    name: 'help',
    description: 'help cmd',
    execute(message, args, Discord){
        let exampleEmbed = new Discord.MessageEmbed()
        .setTitle("Help")
        .setDescription("`help` - this command\n`ping` - gives the bot's latency\n`hi` - Hello There with a twist\n`info` - gives some info\n`ban [user]` - **banned**\n`kick [user]` - **kicked**\n`clear [num]` - .ey wh.r. d.d .y m.ss..e .o\n`mute [user]` - make sure you have a role called Member & Muted\n`unmute [user]` - finally, i can talk\n`meme` - hahahahah\n`invites` - who invited how much?\n`avatar` - Whats my pfp again?\n`pfp` - multiple pfp's (in development)`say [msg]` - msg\n`hug [user]` - in development")
        .setColor("Black")
        .setTimestamp()
        .setFooter("(©Bumblebee99. All Rights Reserved)")
        message.channel.send(exampleEmbed);
    }
}