const fetch = require('node-fetch')

module.exports = {
    name: 'meme',
    description: "laughs silently",
    async execute(message, args, Discord){
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send("Getting visible laughs...");
                const memeEmbed = new Discord.MessageEmbed()
                .setTitle(json.title)
                .setImage(json.url)
                .setTimestamp()
                .setColor("Black")
                .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`);
                msg.edit(memeEmbed);
            });
    }
}