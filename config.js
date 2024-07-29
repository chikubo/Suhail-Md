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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDk0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDcxLFxuICAgICAgICAzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgODksXG4gICAgICAgIDk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQzLFxuICAgICAgICA4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3LFxuICAgICAgICA1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY3LFxuICAgICAgICA0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxLFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYWnJjcDhVMlJ2c1NCMEowVnNQb3NTcHlkS2R4dUdZQkRHdW9YT3p2M3M0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2SWZUbEoyeFFBZVVSeDdtYWJxYUpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkxMDJlMDQ5LWIyMDQtNDNlMi1hNzhhLWNmOTIyNjJmMWZhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAxNjAsXG4gICAgICAxNzAsXG4gICAgICAyNDEsXG4gICAgICAxMTcsXG4gICAgICAxNzIsXG4gICAgICAxMTAsXG4gICAgICA1OCxcbiAgICAgIDY2LFxuICAgICAgMTY2LFxuICAgICAgMjEwLFxuICAgICAgNzksXG4gICAgICA4MyxcbiAgICAgIDgwLFxuICAgICAgMjE0LFxuICAgICAgNzIsXG4gICAgICAxMDgsXG4gICAgICAxODIsXG4gICAgICAxNzYsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDEzLFxuICAgICAgMTQ2LFxuICAgICAgMCxcbiAgICAgIDIwNSxcbiAgICAgIDE4OCxcbiAgICAgIDI3LFxuICAgICAgMTI4LFxuICAgICAgMTUzLFxuICAgICAgNzYsXG4gICAgICAxODYsXG4gICAgICA1MyxcbiAgICAgIDE4LFxuICAgICAgODEsXG4gICAgICA0LFxuICAgICAgMjUzLFxuICAgICAgMjMsXG4gICAgICAxOTIsXG4gICAgICAxMjksXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEZQMk43UzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzUxMzM0NjIzOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYxNTIyNDkxODQzNTk6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkh6NW9jQ0VMR3JuN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4V1ZJVUd0VmNlbFNOV1RDN29VV2N3enEzSXhkYjN2VzdheENXNnhZcFJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndHbGNYOHByZzFILzFhSDdid2pmeTJ5K0hqMytDL3laNXRkVmtDdTgvbW9QWUNDK0F5STR0TUZMTjFuSWFGd215eEFTSHEvdmVSaE9SejZmUys2YkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJwenBLRXJZamFyV3JaOUlvby9FRUxpd3dUcnNFWVk3NFU3UmZhVFhZdlhBZ05RWHhuL29vaVVvcXRETEpEa2dPZzJFY0haL1pQakJRWE9UdGdkemhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzUxMzM0NjIzOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjc1MjU5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
