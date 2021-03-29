module.exports = {
    name: 'info',
    description: 'bot info',
    execute(message, args, Discord){
        let exampleEmbed = new Discord.MessageEmbed()
        .setTitle("Info")
        .setDescription("Hi there, i'm a bot programmed in *discord.js* by Discord user Bumblebee99#3818.\nI'm a solo project made to develop Bumblebee's *JS* and *discord.js* skills.\n\n**While you are here, check this out.**")
        .addFields(
            { name: 'Help Server', value: '[**Join**](https://discord.gg/c2bYFMM6EX)', inline: true },
            { name: 'Website', value: '**COMING SOON**', inline: true },
            { name: 'Invite Me', value: '[**Click**](https://discord.com/oauth2/authorize?client_id=814887342136623105&permissions=8&scope=bot)', inline: true },
        )
        .setColor("Black")
        .setThumbnail('https://cdn.discordapp.com/attachments/751068787746537529/814909183916113990/ooooo.jpg')
        .setTimestamp()
        .setFooter("(©Bumblebee99. All Rights Reserved)")
        message.channel.send(exampleEmbed);
    }
}