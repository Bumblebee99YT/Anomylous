module.exports = {
    name: 'ping',
    description: 'Gives you the bot\'s latency',
    execute(message, args, Discord){
        message.channel.send("Finding bot ping...").then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            let exampleEmbed = new Discord.MessageEmbed()
            .setTitle("🏱︎♓︎■︎♑︎")
            .setDescription(`${ping}❍︎⬧︎`)
            .setColor("Black")
            .setTimestamp()
            .setFooter("May be inaccurate")
            message.channel.send(exampleEmbed);
        })
    }
}