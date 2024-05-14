const { EmbedBuilder } = require("discord.js");
module.exports = {
    desciption: 'Water Space dungeon Answers',
    run: async (message) => {
        const arg = message.content.slice(1).split(' ')[0];

        if (arg.length < 1) return message.reply('Invalid argument');

        const embed = new EmbedBuilder()
            .setColor('Blurple')
            .setTitle('Riddle dungeon web helper')
            .setURL('http://dro.somee.com/')
            .setFooter({text: 'website not available for mobile devices'})

        message.channel.send({ embeds: [embed] });
    }
}