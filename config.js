const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_45_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgODksXG4gICAgICAgIDI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzLFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgwLFxuICAgICAgICA2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYxLFxuICAgICAgICA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMTUxLFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzLFxuICAgICAgICA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NixcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInV4QjhqajNlVUR1RjB6U0N1RTYxU3FrK0s4N1NQcnYyTGFiZ2ZWRCtEWWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJwaE44eVVLUnpLWlQ1aFZkT0RnWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWY2NWI4NWEtOTY1YS00ZGMwLWJjYzItNDZmNGE0YWZkMDg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMTU5LFxuICAgICAgMTI2LFxuICAgICAgMTk1LFxuICAgICAgMTU4LFxuICAgICAgMzQsXG4gICAgICA1NyxcbiAgICAgIDk3LFxuICAgICAgMjM3LFxuICAgICAgMTIxLFxuICAgICAgMTIyLFxuICAgICAgODAsXG4gICAgICA1MyxcbiAgICAgIDU2LFxuICAgICAgMjA2LFxuICAgICAgMTQwLFxuICAgICAgODksXG4gICAgICAyLFxuICAgICAgMTc3LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICA3MCxcbiAgICAgIDQ1LFxuICAgICAgMTgsXG4gICAgICAxMjMsXG4gICAgICAxNjMsXG4gICAgICAxNzgsXG4gICAgICAxMjEsXG4gICAgICA2MixcbiAgICAgIDE5NSxcbiAgICAgIDc0LFxuICAgICAgMTI4LFxuICAgICAgMzIsXG4gICAgICAxMTksXG4gICAgICAxNTEsXG4gICAgICA1LFxuICAgICAgMTQzLFxuICAgICAgMjU1LFxuICAgICAgMTU2LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3M0hQNUJaRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTEzMzQ2MjM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNjE1MjI0OTE4NDM1OTozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM3o1b2NDRU56MWlMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhXVklVR3RWY2VsU05XVEM3b1VXY3d6cTNJeGRiM3ZXN2F4Q1c2eFlwUkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTmErTFVuTGZtTkU5WTBhVmhjZXhuRjNndEcxUHc0dlJLZVE4TjNacXQ5Z0JDOGQ4ZUJGTFRyTjV5SThLRWlwWko0MXdEVmZUU1lzTzRDc1FMTERlQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT0RodENlNGRnRkc4b2Y2U0JCZkEwdm5OTmdEenhUZmxwSG43R2wvRlJ2c3pCM21TbHNFQnNJTXNNWFVqWEdxWk9Da0hxMGhESCtieUNpQUpJUUl0aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTEzMzQ2MjM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5MDc5MzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9😫"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
