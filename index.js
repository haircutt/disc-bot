 { REST, Routes } from 'discord.js';


require('dotenv').config(); 
const { Insults } = require("./src/datastore"); 
const Discord = require("discord.js");

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "MESSAGE_CONTENT"],
    partials: ["CHANNEL", "MESSAGE"]
});
 
const token = process.env.CLIENT_TOKEN;
const prefix = process.env.PREFIX;
 
client.on('ready', async () => {
    console.log(`I'M READY! ${client.user.username}`)
});

function getRandomInsult() {
    const insults = Object.values(Insults);
    return insults[Math.floor(Math.random() * insults.length)];
    //TODO: instead of an enum, will use an LLM!
}

// const LLM_client = new InferenceClient(process.env.HUGGING_FACE_API);
const LLM_client = process.env.HUGGING_FACE_API;
// async function generateLLMInsult() {
//   try {
//     const prompt = `Roast someone in a creative way:`;
//     const response = await fetch(
//       'https://api-inference.huggingface.co/models/deepseek-ai/DeepSeek-R1',
//       {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${LLM_client}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ inputs: prompt, 
//             parameters: {
//                 max_length: 60,
//                 temperature: 0.9
//             }
//         }),
//         timeout: 6000
//       }
//     );
//     if (!response.ok) throw new Error(`API error: ${response.status}`);
//     const data = await response.json();
//     console.log(data);
//     return data[0]?.generated_text || "I'm too nice to insult you!";
//   } catch (e) {
//     console.error("LLM Error:", e);
//     return getRandomInsult(); // Fallback to local insults
//   }
// }

generateLLMInsult();

function textToMessage(message) {
  //TODO: takes input from terminal --> sends as message via bot
  message = 'you suck';
  return message;
}
client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === prefix + "test") {
        message.reply("Test successful!");
    }
    if (message.content.toLowerCase().includes('mean')) {
      message.reply(getRandomInsult());
    // message.reply(generateLLMInsult());
    }
    if (message.content.toLowerCase() === prefix + "ping") {
        message.channel.send("PONG \n" + `🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms` + "\nPING");
    }
    //TODO: features
    //

});
 
client.login(token);
