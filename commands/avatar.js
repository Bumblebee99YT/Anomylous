module.exports = {
    name: 'avatar',
    description: "Displays your avatar",
    async execute(message, args, Discord){
        let avatarEmbed = new Discord.MessageEmbed()
        .setTitle("Your Avatar")
        .setImage(message.author.displayAvatarURL())
        .setColor("Black")
        .setTimestamp()
        .setFooter("(©Bumblebee99. All Rights Reserved)")
        message.channel.send(avatarEmbed)
    }
}