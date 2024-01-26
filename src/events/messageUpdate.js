const { EmbedBuilder } = require("discord.js");
const fs = require('fs');
const rawdata = fs.readFileSync('config/config.json');
const config = JSON.parse(rawdata);
module.exports = {
  name: "messageUpdate",
  once: false, // Retirez "once: true" pour exécuter l'événement chaque fois qu'un message est édité
  async execute(oldMessage, newMessage, message, client) {
    function updateMsg() {
      const userName = "Charlie!"; // Le compte de Charlie
      const logId = "1168548140496994425";
      const author = oldMessage.author;
      const content = oldMessage.content;
      const msgChan = oldMessage.channel.name;
      const newContent = newMessage.content;
      const logChann = oldMessage.guild.channels.cache.get(logId);

      const logMsg = new EmbedBuilder()
        .setColor(0xffe100)
        .setTitle("Updated Message")
        .addFields(
          { name: " ", value: " " },
          { name: "From User:", value: `${author}`, inline: true },
          { name: "In :", value: `#${msgChan}`, inline: true },
          { name: " ", value: " " },
          { name: " ", value: " " },
          { name: "Old Content", value: `${content}` },
          { name: "New Content", value: `${newContent}` },
          { name: " ", value: " " }
        )
        .setThumbnail("https://cdn.discordapp.com/avatars/"+ oldMessage.author.id+"/"+ oldMessage.author.avatar+".jpeg")
        .setTimestamp()
        .setFooter({ text: `by ${userName}`, iconURL: `${config.userIcon}` });

      logChann.send({ embeds: [logMsg] });
    }

    updateMsg();
    console.log(oldMessage.author.id)
  },
};
