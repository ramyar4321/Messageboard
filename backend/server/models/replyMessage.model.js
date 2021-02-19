import mongoose from 'mongoose'

const ReplyMessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    inputFile: {
        type: String,
        required: false,
        default: ""
    },
    createdAt: { type: Date }
})


export default ReplyMessageSchema