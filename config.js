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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_00_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY3LFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDcyLFxuICAgICAgICA0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM5LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwLFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhtdjRyZ09nNVgyUWFyYUtRaHJJdWRwOEVwY1ZwQTIzTTlqVjUrVERaMTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1FaGNUMG9OU2dPeGN2YllUTnU5Z1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTgwOGFhMWEtZDRkMS00OTUzLTkwNGUtOTg3N2M0ZmVlNWY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE1NCxcbiAgICAgIDIzOCxcbiAgICAgIDExNSxcbiAgICAgIDE2OCxcbiAgICAgIDUxLFxuICAgICAgMTQwLFxuICAgICAgMTk4LFxuICAgICAgMTc2LFxuICAgICAgMTc5LFxuICAgICAgOTIsXG4gICAgICAzOCxcbiAgICAgIDE4MSxcbiAgICAgIDIwOCxcbiAgICAgIDE4NyxcbiAgICAgIDksXG4gICAgICA3NixcbiAgICAgIDMwLFxuICAgICAgMjcsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMjUsXG4gICAgICAzOSxcbiAgICAgIDM1LFxuICAgICAgMjM4LFxuICAgICAgMjAyLFxuICAgICAgNDMsXG4gICAgICAyMTEsXG4gICAgICAyMjEsXG4gICAgICAxNyxcbiAgICAgIDEwMCxcbiAgICAgIDE0MyxcbiAgICAgIDkwLFxuICAgICAgMjMsXG4gICAgICAyNDMsXG4gICAgICAxNzAsXG4gICAgICAxMzUsXG4gICAgICAxMzQsXG4gICAgICAxMjcsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEU3QTc3NE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzUxMzM0NjIzOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjYxNTIyNDkxODQzNTk6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXp6NW9jQ0VKckVpTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4V1ZJVUd0VmNlbFNOV1RDN29VV2N3enEzSXhkYjN2VzdheENXNnhZcFJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktlbG5tU08wbHA2bElSbElRWVlMWmk4ck5xWXA0SWhrWnFoV1BTYlFQMXhIWWE0UkhBRzRSTFJ2WHEzbUVtVFFRc2RYREFHdWUwUmV4MEJ6a2lMS0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBFNDA3ZnF5aGxwenJJNGRRemhjMjNCQzAvd216cFFTQ09TVTNBSFpBQ1dTY0Z4dU5BckdBRG52MW9SZk9vQXM3RkVQOU1uckFIeHpibXBqREJjY0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzUxMzM0NjIzOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTAxNjAxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
