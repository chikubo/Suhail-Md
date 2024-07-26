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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_54_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgNDksXG4gICAgICAgIDI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUGVyN3hEU1FUcVlvVnRMSFpJSDZwSjFPOEgzekdqM2ErVTE5aDZIQmw3RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOVBhWnpqcGRUc2VCYlVwVURXLXZmZ1wiLFxuICBcInBob25lSWRcIjogXCI3NjFmZTE0Mi1jNGI1LTQ1ZDItYmMzOC01OTU5Y2JkYmZmZWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgMjI2LFxuICAgICAgOTEsXG4gICAgICA4NixcbiAgICAgIDI0NyxcbiAgICAgIDEwNSxcbiAgICAgIDMyLFxuICAgICAgMjE3LFxuICAgICAgMTY4LFxuICAgICAgMjQ5LFxuICAgICAgMTYwLFxuICAgICAgNjMsXG4gICAgICAxMTUsXG4gICAgICAxMTgsXG4gICAgICAxMjYsXG4gICAgICAyMjgsXG4gICAgICAxOTAsXG4gICAgICAxODMsXG4gICAgICA4OSxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxNTIsXG4gICAgICAzMCxcbiAgICAgIDk5LFxuICAgICAgMTI4LFxuICAgICAgMjI1LFxuICAgICAgMTU2LFxuICAgICAgMTU2LFxuICAgICAgNDcsXG4gICAgICAzNyxcbiAgICAgIDgyLFxuICAgICAgMTA1LFxuICAgICAgMTgzLFxuICAgICAgMTExLFxuICAgICAgMTQsXG4gICAgICAxODYsXG4gICAgICA3NyxcbiAgICAgIDE2NyxcbiAgICAgIDIwNCxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSN1hQNEFQNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTEzMzQ2MjM6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNjE1MjI0OTE4NDM1OTozN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORHo1b2NDRU1HQWpyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhXVklVR3RWY2VsU05XVEM3b1VXY3d6cTNJeGRiM3ZXN2F4Q1c2eFlwUkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR2RubEloWVUxb2JJTWptUEFubG43UzJJOFhQTCtGaTZ2TGdPcWRRVEgvZkVIZnlzN0JZaW1QV0lzYWxJdldmT0NhY2kxd1lTUDlockNPa1VzY1BmQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMmpEVWVleUtJZ0tka3JhRHpsdnF0NDF2MUd2TURCV3lsaVBqVzVMdWxJTlNYeUxjY00waVZPaHROSFQyRE5rQmI0UnpOU2pHeWgwVitiY2JFRmNZRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTEzMzQ2MjM6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5OTEyNjhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9

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
