import mongoose from 'mongoose'

const ReplyMessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
        default: ""
    },
    createdAt: { type: Date, default: new Date() }
})


export default ReplyMessageSchema