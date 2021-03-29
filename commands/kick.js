module.exports = {
    name: 'kick',
    description: 'Kicks a user from the server',
    async execute(message, args, Discord, client){
        const member = message.mentions.users.first();
        if(message.member.hasPermission("KICK_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                const msg = await message.channel.send(`${member} has been **KICKED**`);
                memberTarget.kick().catch(err => msg.edit(`${member} is too **STRONG**\nGoing in to a state of ~~depression~~`));
            }
            else{
                message.channel.send("That member is not in this guild :(");
            }
        }
        else{
            message.channel.send("You couldn't kick :( Do you have the permissions `KICK_MEMBERS`?\nB♓︎g ☜︎❒︎❒︎or");
        }
    }
}