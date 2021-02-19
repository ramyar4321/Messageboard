import mongoose from 'mongoose'
import OrginalMessage from './originalMessage.model.js'
import ReplyMessage from './replyMessage.model.js'

const ThreadSchema = new mongoose.Schema({
    originalMessage:  OrginalMessage,
    replies: [ReplyMessage]
})

const ThreadModel = mongoose.model('Thread', ThreadSchema)


export default ThreadModel