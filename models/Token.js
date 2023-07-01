import mongoose from "mongoose";
const tokenSchema = mongoose.Schema({
    accessToken: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required:true
    }
})

export default mongoose.model("token",tokenSchema) 