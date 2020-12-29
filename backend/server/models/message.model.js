import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true,
        default: ""
    },
    image: {
        type: String,
        required: true,
        default: ""
    },
    createdAt: { type: Date, default: new Date() }
})


export default MessageSchema