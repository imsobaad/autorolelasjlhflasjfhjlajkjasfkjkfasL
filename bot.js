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
     if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**[**تم تفعيل امر [**الرتبة التلقائية**`), ar[message.guild.id].onoff = 'On']
     if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**[**تم اطفاء امر [**الرتبة التلقائية**`), ar[message.guild.id].onoff = 'Off']
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








client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "general") {    
	         message.channel.send('**تم ارسال الاوامر العامة في الخاص**');
	
		 


 message.author.sendMessage(`
 **
 
╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
┃╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
┃┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╰╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╰━━╯

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    __معلومات | Informations__             

اسم البوت [ King | Bot ] Bot's Name

برفكس البوت [ * ] Bot Prefix

صانع البوت [ Viînz#9647 ] Bot's Developer

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
__الاوامــر الــعـــامـــة__

*invite ➾ لدعوة البوت الى سيرفرك

*server ➾ معلومات عن السيرفر                      

*say ➾ البوت يردد كلامك         

*setcolor ➾ عشان تغير لونك ملاحظة لازم تحط رقم اللون                                          

*bot ➾ معلومات عن البوت

*ping ➾ لمعرفه سرعه البوت

*members ➾ معلومات عن الاعضاء

*emojilist ➾ لعرض الايموجي حقت السيرفر

*id ➾ لمعرفة معلومات حسابك

*avatar ➾ لاعطائك صورة الشخص اللي منشنته مع الرابط

*link ➾ يعطيك رابط انفايت للسيرفر اللي انت فيه

*trans <language> <any thing> ➾ يترجم لك الي تبيه من اي لغة

*short ➾ لاختصار الروابط

*embed ➾ كتابة كلامك داخل امبد

*tag ➾ يكتب لك الكلمة بشكل جميل وكبير

*contact ➾ لارسال رسالة لصاحب البوت

*support ➾ لدخول سيرفر دعم البوت

==================================================================

Support Server : https://discord.gg/feMu8XW

==================================================================

Invite Link : https://discordapp.com/oauth2/authorize?client_id=456934284566069248&permissions=8&scope=bot

==================================================================

`);

    }
});




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "staff") {    
	         message.channel.send('**تم ارسال اوامر الادمنية في الخاص**');
	
		 


 message.author.sendMessage(`
 **
 
╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
┃╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
┃┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╰╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╰━━╯

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    __معلومات | Informations__             

اسم البوت [ King | Bot ] Bot's Name

برفكس البوت [ * ] Bot Prefix

صانع البوت [ Viînz#9647 ] Bot's Developer

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
__اوامـــر الادمـــنـــيــــة__

*giveaway ➾ لعمل قيف اواي مع تحديد الروم

*vb ➾ لمنع الشخص اللي تمنشنه من دخول الرومات الصوتية

*unvb ➾ عشان تفك البان عنه من الرومات الصوتية

*ban ➾ لتبنيد شخص ما من السيرفر

*kick ➾ لتعطي شخص كيك

*clearall ➾ لمسح 300 رسالة بالشات

*clear <numb> ➾ لمسح عدد الرسائل التي تريدها

*mute ➾ لاعطاء شخص ما ميوت مع تحديد وقت الميوت 

*mutechannel ➾ لتقفيل الشات 

*unmutechannel ➾ لفتح الشات 

*unmute ➾ لنزع الميوت من الشخص

*hidechannel ➾ لاخفاء روم معين 

*showchannel ➾ لاظهار روم معين 

*hall ➾ لاخفاء جميع الرومات

*sall ➾ لاظهار جميع الرومات

*ct ➾ لانشاء روم كتابي مع اختيار الاسم

*cv ➾ لانشاء روم صوتي مع اختيار الاسم 

*v2min ➾ لانشاء روم صوتي مؤقت لدقيقتين

*add.r ➾ لانشاء رتبة مع تحديد الاسم 

*delet ➾ كـود يحذف الـروم سواء صوتي او كتابي

*dc ➾ لمسح جميع الرومات

*dr ➾ لمسح جميع الرولات

*bc ➾ للبرودكاست 

*bcrole ➾ برودكاست لرتبة معينة 

*deletall ➾ لحذف كل الرومات و الرولات من السيرفر 

*ccolors ➾ لانشاء 137 لون متناسق

*deletecolors ➾ لحذف 137 لون

*move all ➾ سحب جميع الأعضاء لرومك الصوتي

*roles ➾ لعرض رولات السيرفر 

*rooms ➾ لعرض رومات السيرفر 

*role @user <rank> ➾ لاعطاء شخص ما رتبة

*roleremove @user <rank> ➾ لنزع رتبة من شخص ما

*role all <rank> ➾ لاعطاء الجميع رتبة

*role humans <rank> ➾ لاعطاء البشريين رتبة 

*role bots <rank> ➾ لاعطاء البوتات رتبة 

*autorole toggle ➾ لتفعيل خاصية الرتبة التلقائية للاعضاء الجدد

*autorole set [role name] ➾ لاختيار الرتبة اللي تبي البوت يعطيها للناس اللي يدخلون

*info ➾ لمعرفة اذا كانت خاصية الرتبة التلقائية مفعلة او لا 

==================================================================

Support Server : https://discord.gg/feMu8XW

==================================================================

Invite Link : https://discordapp.com/oauth2/authorize?client_id=456934284566069248&permissions=8&scope=bot

==================================================================

`);

    }
});





client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "music") {    
	         message.channel.send('**تم ارسال اوامر الموسيقى في الخاص**');
	
		 


 message.author.sendMessage(`
 **
 
╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
┃╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
┃┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╰╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╰━━╯

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    __معلومات | Informations__             

اسم البوت [ King | Bot ] Bot's Name

برفكس البوت [ * ] Bot Prefix

صانع البوت [ Viînz#9647 ] Bot's Developer

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
__اوامـــر الموسيقى__

*play ➾ لتشغيل اغنية

*skip ➾ لتجاوز الاغنية الحالية

*pause ➾ لايقاف الاغنية

*resume ➾ لامواصلة الاغنية

*vol ➾ لتغيير درجة الصوت 100 - 0

*stop ➾ لاخراج البوت من رومك

*join ➾ لادخال البوت الى رومك الصوتي

==================================================================

Support Server : https://discord.gg/feMu8XW

==================================================================

Invite Link : https://discordapp.com/oauth2/authorize?client_id=456934284566069248&permissions=8&scope=bot

==================================================================

`);

    }
});






client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "games") {    
	         message.channel.send('**تم ارسال اوامر الالعاب في الخاص**');
	
		 


 message.author.sendMessage(`
 **
 
╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
┃╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
┃┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╰╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╰━━╯

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    __معلومات | Informations__             

اسم البوت [ King | Bot ] Bot's Name

برفكس البوت [ * ] Bot Prefix

صانع البوت [ Viînz#9647 ] Bot's Developer

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
__اوامـــر الالـــعـــاب__

*عشان تعطي الشخص اللي تمنشنه لكمة ➾ لكمة

*لعبة هل تعلم ➾ هل تعلم

*rps ➾ لعبة حجر ورقة مقص

*roll <numb> ➾ قرعة

*emoji ➾ لكتابة كلامك بايموجي

*لعبة اسئلني ➾ اسئلني

*لعبة كت تويت ➾ كت تويت

*لعبة لو خيروك ➾ لو خيروك 

*معلومات عن الاسلام ➾ دين

*يعطيك بعض الاذكار ➾ اذكار

==================================================================

Support Server : https://discord.gg/feMu8XW

==================================================================

Invite Link : https://discordapp.com/oauth2/authorize?client_id=456934284566069248&permissions=8&scope=bot

==================================================================

`);

    }
});









client.login(process.env.BOT_TOKEN);
