import dotenv from 'dotenv'
dotenv.config()
import { google } from "googleapis";
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

export default oauth2Client