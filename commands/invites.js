module.exports = {
    name: 'invites',
    description: "How many invites does this guy have on my server",
    async execute(message, args, Discord){
        const { guild } = message

        guild.fetchInvites().then((invites) => {
            const inviteCounter = {

            }

            invites.forEach((invite) => {
                const { users, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${username}#${discriminator}`

                inviteCounter[name] = (inviteCounter[name] || 0) + users
            })

            let replyText = "Number of Invites: \n"

            const sortedInvites = Object.keys(inviteCounter).sort(
                (a, b) => inviteCounter[b] - inviteCounter[a]
            )

            console.log(sortedInvites)

            sortedInvites.length = 3

            for (const invite of sortedInvites){
                const count = inviteCounter[invite]
                replyText += `\n **${invite}** has invited ${count} members(s)`
            }

                let embedInvite = new Discord.MessageEmbed()
                    .setTitle("Server Invites")
                    .setDescription(replyText)
                    .setColor("Black")
                    .setFooter("(©Bumblebee99. All Rights Reserved)")
            
            message.channel.send(embedInvite);
        });
    }
}