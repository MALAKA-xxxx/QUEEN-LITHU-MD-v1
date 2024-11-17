const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "oycUxCJY#QzfJwchmQXDhAhxBHKgLwKRLNf-sxtW8MlfOKTNl0sA",
MONGODB: process.env.MONGODB || "mongodb://mongo:EdhPLwBbfhyOLwmgdkRatAcogBsKbakN@autorack.proxy.rlwy.net:23902",
ALIVE_IMG: process.env.ALIVE_IMG || "https://unitedcamps.in/Images/file_5278.jpg",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true"
};
