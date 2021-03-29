module.exports = {
    name: 'clear',
    description: "Clears chat",
    async execute(message, args){
        if(message.member.hasPermission("MANAGE_MESSAGES")){
            if(!args[0]) return message.channel.send("Please include the amount\ne.g. `a!clear 2`");
            if(isNaN(args[0])) return message.channel.send("Please enter a **number**");

            if(args[0] > 100) return message.channel.send("Clearing more than 100 messages makes me sad, please be more generous.");
            if(args[0] < 1) return message.channel.send("`0` wont clear anything, you know that right?");

            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
                message.channel.send('Messages have been cleared').then(msg =>{
                    msg.delete({ timeout: 3000})
                })
            })
        }
        else{
            message.channel.send("You couldn't clear :( Do you have the permissions `MANAGE_MESSAGES`?\nB♓︎g ☜︎❒︎❒︎or");
        }
    }
}