import mongoose from 'mongoose'

const OrginalMessageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: false,
        default: ""
    },
    image: {
        type: String,
        required: false,
        default: ""
    },
    createdAt: { type: Date, default: new Date() }
})


export default OrginalMessageSchema