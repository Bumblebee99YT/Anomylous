module.exports = {
	name: 'pfp',
	description: "displays avatar of even mentioned user",
	execute(message, args, client) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
		}
		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
		});
		message.channel.send(avatarList);
	}	
}