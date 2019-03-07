const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function()
{
    bot.user.setGame("Chucky, !help");
    console.log("Le bot à bien été connecté.");
});

bot.login("NTUzMjY4Njg2MjYyMTA4MTY4.D2LosA.wB-X_ccBHt2pJIfwfTU3KUwV89g")
