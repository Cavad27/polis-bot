const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`Bot hazır: ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content === "sa") {
    message.reply("as");
  }
});

client.login(process.env.TOKEN);