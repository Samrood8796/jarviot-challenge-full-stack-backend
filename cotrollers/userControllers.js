import oauth2Client from "../config/oauth2Client.js";
import { getAnalyticData, getTokensFromGoogle, revokeTOken } from "../helpers/googleHelpers.js";

export const authGoogle = async (req, res) => {
    try {
        const authUrl = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: ['https://www.googleapis.com/auth/drive.readonly']
        });
        res.redirect(authUrl);

    } catch (err) {
        res.status(500).json("internal error")
    }
}
export const callbackUrl = async (req, res) => {
    try {
        console.log('callback called');
        const { code } = req.query;
        const response = await getTokensFromGoogle(code)

        res.status(200).json(response);
    } catch (err) {
        console.error('Error during callback:', err);
        res.status(500).send('An error occurred during authorization.');
    }
}
export const analytics = async (req, res) => {
    try {
        const { id } = req.params
        const files = await getAnalyticData(id)
        if (files.length) {
            const riskCounter = files.length
            res.status(200).json({ files, riskCounter })
        } else {
            console.log('No files found.');
        }

    } catch (err) {
        res.status(500).json("internal error")
    }
}
export const revoke = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        revokeTOken(id).then(() => {
            res.status(200).json('Access revoked successfully');
        })
    } catch (err) {
        res.status(500).json(err.msg)
    }
}


