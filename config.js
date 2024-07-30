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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347039177172";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_54_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDkxLFxuICAgICAgICA2NixcbiAgICAgICAgOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyUFphR2IyNkdxQ2NSYjErK2lhOG41dGtJN0c3VEcrTEUwd3pyc2hRL1Q4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3Y3hLMG9uN1RwNkNtQWxhZHBpODBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg4ZTAyZWUwLThiYjgtNDYyNi1hNGY2LWIyNTA0NGViMDQyM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxMixcbiAgICAgIDI0LFxuICAgICAgNjksXG4gICAgICAxNTQsXG4gICAgICAzNCxcbiAgICAgIDkxLFxuICAgICAgMTA0LFxuICAgICAgMzQsXG4gICAgICAxNDIsXG4gICAgICAxODksXG4gICAgICAxMzQsXG4gICAgICAxLFxuICAgICAgMjAsXG4gICAgICAyNyxcbiAgICAgIDE2MyxcbiAgICAgIDQwLFxuICAgICAgMTk0LFxuICAgICAgMjEyLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMTcyLFxuICAgICAgNjksXG4gICAgICAxODMsXG4gICAgICAzMixcbiAgICAgIDI3LFxuICAgICAgMTg3LFxuICAgICAgMjEyLFxuICAgICAgMjUwLFxuICAgICAgNyxcbiAgICAgIDIxNixcbiAgICAgIDI1MCxcbiAgICAgIDEwLFxuICAgICAgMTExLFxuICAgICAgMTIxLFxuICAgICAgNTQsXG4gICAgICA1MyxcbiAgICAgIDEyNCxcbiAgICAgIDI0NCxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU0NjdWMllOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM5MTc3MTcyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMjIwNTc5NDUxMjk1Mzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x5VTk0TUVFUExCcGJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiek5jd1crUGVOSmx0S3FCczFQa1ZMWlRSenJDUEdwRCtsdFpma3FjM0ZoQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlb2NvMFBJUHp2RWlxcVFrZVVES0MxNkVjY3JOSkFBcy83MFhpb2t4aXM2ZmZTTkVkVTJ4L0hDZkZ1eVhwSnJCSGl1Y1lhcTBpZXNMM1J5c1UvNDRBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0WTZOL3ZGRmZ5TlVVeDd5RFBtM0pNb3BkcWlObDlhWkdCaXRYbHQzd21CSXNQNzA1S1RDWVpHSmtHTmFURE5kUUVtaC9wbldGdGdSaVVsSGJnMS9EUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM5MTc3MTcyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzc2NDM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWhwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBaHAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzZG5mYkhkRjZDemNMWk0yekd1UVdHNzlRWVpabmtVbUMwTXBVMm1rdWk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwODE5ODU1OTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIzNzYzMTQxMjVcIn0iCn0="  // PUT your SESSION_ID 


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
