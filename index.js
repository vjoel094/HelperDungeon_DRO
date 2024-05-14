const { Client, Events } = require("discord.js");
require('dotenv').config();

const client = new Client({
    intents: 3276799
});

client.on(Events.ClientReady, async () => {
    console.log('Connected to Discord as', client.user.username);
});

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith('!')) return;

    const arg = message.content.slice(1).split(' ')[0];

    try {
        const command = require('./commands/' + arg.toUpperCase());
        command.run(message);
    } catch (error) {
        console.log('Error:', arg, error.message);
    }
});

/*
new_username = "Dungeon Helper DRO"

client.on('ready', async () => {
    await client.user.setUsername(new_username);
});
*/

client.login(process.env.TOKEN)