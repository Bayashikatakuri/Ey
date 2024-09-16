//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU0wYlFZUnRXMER3eW9LdURNb1YxeUlqbkh6L1I3cU53Y0NDanY5VUUwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1ZhNVNITGx1Z3RTRnZSamtOZHV6QXJCMmwzenhIMnQxV3RNd210YVVrcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSWRMYUNyOGVYeEhrNHpFbG1DMnA4VlZxVVZuMzVvTUhKSHUzSk16d25NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIc0c2RjJEL0plUXlSTkdpQ3oyWGJSTkRiOTBld0liT25xb3VEb1BwTmowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFKZXRSbjUzVXF4MnlzcXBYNEpBMEFrdzQ2bUlzV1dRRnVwQ1pjV1JSVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imhvcmh0M2k2UnNZMXhlY21EMkpUTW1KR25tV2ZzdWhOVHBEMU9lSUxDVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0JxRThVY3NSNmxkWEZ3YnVsYmxGK2RNMVFaQUJNbHg1S1kyemxlbWUxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNC9rWW1LU20rRjgvdzRJenplSnR5L2ZTbERCRk5veE1RZ1VvUUxYR3dCaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhGajM0RERERXB6Vy9nTHRWTHd1ODhUS0FzUjJjTG1JL0I3ZDVwT0tjYkYzbnpjd3Z5Z0RCc1JKUkpFUlYxZkg5Q2psRWs2NERrMUdVVDkxSnREREFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiI0cy9vVnVIMTk3ZmIxYmo0Y2g2SnB4azVFUG9HUW5idkR0MW9MV1d0d2pJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQwNzkzMDQwOTM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjYwNUQ0OUYyMDNGNTAwREFBOTU1NTY1QTA5QTMxOTI0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY1MTIxODd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjQwNzkzMDQwOTM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNFMDI1OURDMTFGRjEzM0EzM0ZENEEwN0I4QzgwODk2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY1MTIxODh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBfTkZNVmdlVG15MEpReUs2eVhrR3ciLCJwaG9uZUlkIjoiNGRjMWE3YjEtNjIxMi00OThiLTlkZjMtNmFhNWUyOWI4Yjg3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVzdzhWWCs4NTlEa2M4ZVJpdXI1c3JzbkRFdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyN2FmQlUvNjlYQmhtVHlTN3BIUGc2cVVWNFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUJNQTVXODIiLCJtZSI6eyJpZCI6IjQwNzkzMDQwOTM2OjY2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlhiaWkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09DVGdxQUJFS240b2JjR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlIzVDJNT1RZSEtqbUZnbHhpU1RWZlRtaTZuRW9lOEpBV21iQWV4TE1Nak09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZxYWRYVXp3aHZuQmxPaFVsQTlsUC8yT2RuMVhXdkVvdko5UzNFMkpCZ3dmVmVzN2pvQmV3MzAvYTI2TTl5emJEdVQyVW5VK1NWYVVZb3NpYnZJK0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqTkY1ZHRyajY2Sk9vQmlmU0FmUS9QcmRIMGVHcWpxMmNZVHBOR3N1aW45QTFsTkJaQjl0Q1ZpVVZDNXdOYlpGcjZFUEtONTE5OS9rSlJpclIrSDNCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQwNzkzMDQwOTM2OjY2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVkMDlqRGsyQnlvNWhZSmNZa2sxWDA1b3VweEtIdkNRRnBtd0hzU3pESXoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY1MTIxODIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnc1In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
