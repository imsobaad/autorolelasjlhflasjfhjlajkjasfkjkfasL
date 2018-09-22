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
if (message.content.startsWith(prefix + 'help')) { 
    let pages = [`
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

صانع البوت [ Viînz#3338 ] Bot's Developer

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**
`
,`
        **__الاوامــر الــعـــامـــة__**
**
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
**
  `
,`
        **__اوامـــر الادمـــنـــيــــة__**
**
*giveaway ➾ لعمل قيف اواي
*vb ➾ بان من الرومات الصوتية
*unvb ➾ لنزع البان
*ban ➾ لتبنيد شخص ما
*kick ➾ لتعطي شخص كيك
*clearall ➾ لمسح الشات
*clear <numb> ➾ مسح الشات بعدد
*mute ➾ لاعطاء شخص ميوت مع تحديد وقت الميوت 
*mutechannel ➾ لتقفيل الشات 
*unmutechannel ➾ لفتح الشات 
*unmute ➾ لنزع الميوت من الشخص
*hidechannel ➾ لاخفاء روم 
*showchannel ➾ لاظهار روم 
*hall ➾ لاخفاء جميع الرومات
*sall ➾ لاظهار جميع الرومات
*ct ➾ لانشاء روم كتابي
*cv ➾ لانشاء روم صوتي 
*v2min ➾ لانشاء روم صوتي مؤقت
*add.r ➾ لانشاء رتبة 
*delet ➾ لحذف روم
*dc ➾ لمسح الرومات
*dr ➾ لمسح الرولات
*bc ➾ برودكاست 
*bcrole ➾ برودكاست لرتبة معينة 
*deletall ➾ لحذف كل شيء
*ccolors ➾ لانشاء 50 لون متناسق
*deletecolors ➾ لحذف 50 لون
*colorslist ➾ لعرض الالوان
*setcolor ➾ لاختيار لون
*move all ➾ سحب جميع الأعضاء
*roles ➾ لعرض رولات 
*rooms ➾ لعرض رومات 
*role @user <rank> ➾ لاعطاء شخص رتبة
*roleremove @user <rank> ➾ لنزع رتبة من شخص 
*role all <rank> ➾ لاعطاء الجميع رتبة
*role humans <rank> ➾ لاعطاء البشريين رتبة 
*role bots <rank> ➾ لاعطاء البوتات رتبة 
*autorole toggle ➾ لتفعيل الخاصية
*autorole set [role name] ➾ لاختيار الرتبة
*info ➾ لمعرفة اذا كانت خاصية الرتبة التلقائية مفعلة 
**
   `,`
        **__اوامـــر الموسيــقـى__**
**
*play / لتشغيل أغنية برآبط أو بأسم
*skip / لتجآوز الأغنية الحآلية
*pause / إيقآف الأغنية مؤقتا
*resume / لموآصلة الإغنية بعد إيقآفهآ مؤقتا
*vol / لتغيير درجة الصوت 100 - 0
*stop ➾ لاخراج البوت من رومك
*queue / لمعرفة قآئمة التشغيل
**

        **__اوامـــر الالـــعـــاب__**
 **      
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
**
`

,`
**
╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱╭╮
┃┃┃╭╯╱╱╱╱╱╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╯╭┳━╮╭━━┫╰╯╰┳━┻╮╭╯
┃╭╮┃┣┫╭╮┫╭╮┃╭━╮┃╭╮┃┃
┃┃┃╰┫┃┃┃┃╰╯┃╰━╯┃╰╯┃╰╮
╰╯╰━┻┻╯╰┻━╮┣━━━┻━━┻━╯
╱╱╱╱╱╱╱╱╭━╯┃
╱╱╱╱╱╱╱╱╰━━

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
       __معلومات اخرى | Other Informations__             

سيرفر الدعم [ https://discord.gg/p2sjgAw ] Bot's Name

رابط اضافة البوت [ https://goo.gl/ADmgeW ] Bot Prefix

شكرا لاستخدامك للبوت [ :heart: ] Thanks For Using The Bot

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
**
`]
    let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.author.sendEmbed(embed).then(msg => {
 
        msg.react('◀').then( r => {
            msg.react('▶')
 
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
 
 
 
        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
     
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});







client.on("message", message => {
	var prefix = "*";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});




client.login(process.env.BOT_TOKEN);
