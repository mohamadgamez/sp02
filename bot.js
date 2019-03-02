const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");
var adminprefix = '-'

client.on("ready", () => {
let channel =     client.channels.get("550791697219452944")
setInterval(function() {
channel.send(`spam-by-mody-spam-by-mody`);
}, 30)
})
if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 

client.login(process.env.BOT_TOKEN);
