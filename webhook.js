const Discord = require("discord.js");
const webhook = new Discord.WebhookClient({url: "Input Discord Webhook Link"});
webhook.send("INPUT YOUR MESSAGE HERE");
console.log("Sended Webhook");
