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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_46_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MixcbiAgICAgICAgMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNixcbiAgICAgICAgMTExLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDY5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMixcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRtc2NLTVMvYld3TXBYQUdwUUlCVHRhN0hyNEJjSzM3a0tPVURESzNCVUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjE1Z1htdC1iUWJTTWVxT1VmcktFT3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjFlZmZlMWMtZGMyNi00Njg4LTg3ZGUtN2Y0NzI1NTI0YmU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDExMCxcbiAgICAgIDI0MSxcbiAgICAgIDEzNyxcbiAgICAgIDE4NCxcbiAgICAgIDg1LFxuICAgICAgMTM5LFxuICAgICAgMTk1LFxuICAgICAgNjUsXG4gICAgICA2MCxcbiAgICAgIDIzOCxcbiAgICAgIDMyLFxuICAgICAgMjEyLFxuICAgICAgMjQzLFxuICAgICAgMjUzLFxuICAgICAgMjMwLFxuICAgICAgMzQsXG4gICAgICAyMTQsXG4gICAgICAxNjQsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAxMDAsXG4gICAgICAzOCxcbiAgICAgIDIyMCxcbiAgICAgIDIwMixcbiAgICAgIDEyOSxcbiAgICAgIDE5MyxcbiAgICAgIDIwNixcbiAgICAgIDIyNCxcbiAgICAgIDQxLFxuICAgICAgMTA0LFxuICAgICAgMjI4LFxuICAgICAgOCxcbiAgICAgIDkwLFxuICAgICAgMTksXG4gICAgICAyNTIsXG4gICAgICA1OSxcbiAgICAgIDI0MyxcbiAgICAgIDkxLFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUVFOFZHVlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzUxMzM0NjIzOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYxNTIyNDkxODQzNTk6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTS96NW9jQ0VQeWVpclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4V1ZJVUd0VmNlbFNOV1RDN29VV2N3enEzSXhkYjN2VzdheENXNnhZcFJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJoVXNRSG83cTY2QnRVc2RXc251VjV3RHVZc05LMmNudUpFOXRxU25OOEdYUHVCdVZIS3Fmd1I2RDNjaEhNYlZ6ZitxaGwvaXBoR1NLcW9ESVpvNkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZxN0lOT3NzYytJcExGV3BPSXg2a0tNL09kdU1vVlR1QVBtQ244dkpZV3p3OVJSNjFmZ2JaaXl6SkphVmk2dkNtN1ZKRys2TWFCTU4xNXVjVVFPNkRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzUxMzM0NjIzOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTI5NjAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CHIKU-ᴍᴅ",
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
