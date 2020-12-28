import mongoose from 'mongoose'
import Message from './message.model.js'

const ThreadSchema = new mongoose.Schema({
    orginalPost: Message,
    replies: [Message]
})

const ThreadModel = mongoose.model('Thread', ThreadSchema)


export default ThreadModel