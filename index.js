
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`${client.user.tag} aktif!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === 'selam') {
        message.reply('selam');
    }
});

client.login('TOKEN_BURAYA')