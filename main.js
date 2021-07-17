const MusicBot = require('music.bot'),Discord = require('discord.js'),client = new Discord.Client(),
settings = new MusicBot({ botPrefix: '?',botClient: client });
client.on('message', message => {
    if(message.content.startsWith(settings.prefix)) { 
        settings.onMessage(message);
    };
});
client.login('ODY1ODIxNDkxMzI4NDUwNjEx.YPJlGQ.nKDyKBteSF4ypVPTi-yo6erkOJk')
