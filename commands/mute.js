const { RoleManager } = require("discord.js");

module.exports = {
    name: 'mute',
    description: 'Mutes a user on the server',
    execute(message, args, Discord, client){
        if(message.member.hasPermission("MANAGE_ROLES")){
            const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been **muted**`);
            }
            else{
                message.channel.send("That member is not in this guild :(");
            }
        }  
        else{
            message.channel.send("Sorry this command is limited to users with the permision `MANAGE_ROLES`")
        }  
    }
}