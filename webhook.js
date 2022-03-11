const Discord = require("discord.js");
const webhook = new Discord.WebhookClient({url: "https://discord.com/api/webhooks/951824194310647848/1P8bPmFGbbELX2WgkUDi2MTE6g7AiNFZnDRM-FcJy5shK6BF2V-6gko88W9vTCE_QsVe"});
//https://discord.com/api/webhooks/951824194310647848/1P8bPmFGbbELX2WgkUDi2MTE6g7AiNFZnDRM-FcJy5shK6BF2V-6gko88W9vTCE_QsVe
webhook.send("Sended Webhook");
console.log("Sended Webhook");