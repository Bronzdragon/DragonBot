const Discord = require('discord.js');
const client = new Discord.Client();

const {token, prefix} = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);
