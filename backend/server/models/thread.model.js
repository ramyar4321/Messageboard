import mongoose, { model } from 'mongoose'
import Message from './message.model'

const thread = new mongoose.Schema({
    orginalPost: Message,
    replies: [Message]
})

const Thread = mongoose.model('Thread', thread)

module.exports = Thread