module.exports = {
    name: 'ban',
    description: 'Bans a user from the server',
    async execute(message, args, Discord, client){
        const member = message.mentions.users.first();
        if(message.member.hasPermission("BAN_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                const msg = await message.channel.send(`${member} has been **BANNED**`);
                memberTarget.ban().catch(err => msg.edit(`${member} is too **STRONG**\nGoing in to a state of ~~depression~~`));
            }
            else{
                message.channel.send("That member is not in this guild :(");
            }
        }
        else{
            message.channel.send("You couldn't ban :( Do you have the permissions `BAN_MEMBERS`?\nB♓︎g ☜︎❒︎❒︎or");
        }
    }
}