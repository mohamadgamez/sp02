const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ixmody");


client.on("ready", () => {
let channel =     client.channels.get("565539538080890900")
setInterval(function() {
channel.send(`spam-by-mody-spam-by-mody`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
