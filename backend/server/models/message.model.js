import mongoose, { Schema } from 'mongoose'

const message = new Schema({
    title: {type: String, required: true, unique: true},
    message: {type: String, required: false},
    image: {type: String, required: false},
    createdAt: {type: Date, default: new Date()}
})

const Message = mongoose.model('Message', message)

module.exports = Message