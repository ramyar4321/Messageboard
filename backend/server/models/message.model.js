import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    message: {type: String, required: false, default: undefined},
    image: {type: String, required: false, default: undefined},
    createdAt: {type: Date, default: new Date()}
})


export default MessageSchema