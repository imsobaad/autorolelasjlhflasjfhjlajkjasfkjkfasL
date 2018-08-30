const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const { Client, Util } = require('discord.js');  
const getYoutubeID = require('get-youtube-id'); 
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const request = require('request');
const queue = new Map(); 
const client = new Discord.Client(); 
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl'); 
const translate = require('google-translate-api');   
const fs = require("fs"); 
let ar = JSON.parse(fs.readFileSync(`./AutoRole.json`, `utf8`))
const moment = require("moment");
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const zalgo = require('zalgolize');   
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};
 const prefix = "*";



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('guildMemberAdd', member => {
  if(!ar[member.guild.id]) ar[member.guild.id] = {
  onoff: 'Off',
  role: 'Members'
  }
  if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})

client.on('message', message => { 
  var sender = message.author

if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Members'
  }

if(message.content.startsWith(prefix + `autorole`)) {
         
  let perms = message.member.hasPermission(`MANAGE_ROLES`)

  if(!perms) return message.reply(`لا تمتلك صلاحية التعديل على الرتب`)
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`${prefix}autorole toggle `)
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`${prefix}modlogs toggle/set [ROLE NAME] , جرب`) 
    if(state.trim().toLowerCase() == 'toggle') { 
     if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**__**تم تفعيل امر __**الرتبة التلقائية**`), ar[message.guild.id].onoff = 'On']
     if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**__**تم اطفاء امر __**الرتبة التلقائية**`), ar[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newRole = message.content.split(" ").slice(2).join(" ")
   if(!newRole) return message.reply(`${prefix}autorole set [ROLE NAME]`)
     if(!message.guild.roles.find(`name`,newRole)) return message.reply(`لا استطيع ايجاد الرتبة`)
    ar[message.guild.id].role = newRole
     message.channel.send(`**${newRole} تم تغيير الرتبة الى**`)
   } 
         }
if(message.content === prefix + 'info') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`) 
    if(!perms) return message.reply(`لا تمتلك صلاحية التعديل على السيرفر`)
    var embed = new Discord.RichEmbed()

.addField(`Autorole :  `, `

الحالة : __${ar[message.guild.id].onoff}__
الرتبة : __${ar[message.guild.id].role}__`)


    .setColor(`BLUE`)
    message.channel.send({embed})
  }


    fs.writeFile("./AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });


});


client.login(process.env.BOT_TOKEN);
