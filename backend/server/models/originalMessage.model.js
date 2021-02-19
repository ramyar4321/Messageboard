import mongoose from 'mongoose'

const OriginalMessageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: false,
        default: ""
    },
    inputFile: {
        type: String,
        required: false,
        default: ""
    },
    createdAt: { type: Date}
})


export default OriginalMessageSchema