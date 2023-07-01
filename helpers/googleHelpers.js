import { google } from "googleapis";
import oauth2Client from "../config/oauth2Client.js";
import Token from "../models/Token.js";
import axios from "axios";
export const getAnalyticData = (id) => {
    return new Promise(async (resolve, reject) => {

        const result = await Token.findById(id)
        const { accessToken, refreshToken } = result;

        oauth2Client.setCredentials({
            access_token: accessToken,
            refresh_token: refreshToken,
            expiry_date: true
        });
        // Creating instance 
        const drive = google.drive({
            version: 'v3',
            auth: oauth2Client,
        });
        // getting data
        const response = await drive.files.list({
            pageSize: 10,
            fields: 'nextPageToken, files(name, mimeType, size, webViewLink)',
        })
        const files = response.data.files;
        resolve(files);
    })
}

export const getTokensFromGoogle = async (code) => {
    const { tokens } = await oauth2Client.getToken(code);
    const { access_token: accessToken, refresh_token: refreshToken } = tokens;
    console.log("accessToke:=>", accessToken)
    console.log("refreshToken:=>", refreshToken)
    const token = await Token.create({ accessToken: accessToken, refreshToken: refreshToken });
    await token.save()
    return token._id
}
export const revokeTOken = async (id) => {
    return new Promise(async (resolve, reject) => {
        const result = await Token.findById(id)
        const accessToken = result.accessToken;
        console.log("accessToken");
        console.log(accessToken);
        await oauth2Client.revokeToken({ "accessToken": accessToken }).then((res) => {
            console.log(res);
            Token.findByIdAndDelete(result._id)
            resolve()
        }).catch((err) => {
            console.log("err==============================");
            console.log(err);
            reject()
        })
    })
}

