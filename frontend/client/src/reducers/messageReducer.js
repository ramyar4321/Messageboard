import { CREATE_THREAD, UPDATE_THREAD, DELETE_THREAD } from '../constants/types'

const messageReducer = (threads = [], action) => {
    switch (action.type) {
        case CREATE_THREAD:
            return [...threads, action.payload]
        case UPDATE_THREAD:
            //return threads.map((thread) => (thread.originalMessage.id === action.payload.id ? action.payload.thread : thread))
            return threads.map((thread) => {
                if (thread.originalMessage.id === action.payload.id)
                    thread.replies = [...thread.replies, action.payload.reply]
                return thread
            })
        case DELETE_THREAD:
            return threads.slice(1)
        default:
            return threads
    }
}

export default messageReducer