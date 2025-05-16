require('dotenv').config(); 
const { Insults } = require("./datastore"); 
const Discord = require("discord.js");
 
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "MESSAGE_CONTENT"],
    partials: ["CHANNEL", "MESSAGE"]
});
 
const token = process.env.DISCORD_TOKEN;
 
client.on('ready', async () => {
    console.log(`I'M READY! ${client.user.username}`)
});

function getRandomInsult() {
    const insults = Object.values(Insults);
    return insults[Math.floor(Math.random() * insults.length)];
}

client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === "test") {
        message.reply("Test successful!");
    }
    if (message.content.toLowerCase() === ('mean')) {
      message.reply(getRandomInsult());
    }
});
 
client.login(token);
