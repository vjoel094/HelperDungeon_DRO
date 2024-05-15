const { EmbedBuilder } = require("discord.js");
module.exports = {
    desciption: 'Water Space dungeon Answers',
    run: async (message) => {
        const arg = message.content.slice(1).split(' ')[0];

        if (arg.length < 1) return message.reply('Invalid argument');

        const embed = new EmbedBuilder()
            .setColor('Blurple')
            .setTitle('Riddle dungeon web helper')
            .setURL('https://riddldungeondro.up.railway.app/')
            .setFooter({ text: 'New Q&A or corrections send them to Pitohui' })

        message.channel.send({ embeds: [embed] });
    }
}