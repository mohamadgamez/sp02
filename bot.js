const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");



client.on("ready", () => {
let channel =     client.channels.get("551139671682318366")
setInterval(function() {
channel.send(`spam-by-mody-spam-by-mody`);
}, 30)
}) 

client.login(process.env.BOT_TOKEN);
