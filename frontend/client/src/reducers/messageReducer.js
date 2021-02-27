import { GET_THREADS, CREATE_THREAD, UPDATE_THREAD, DELETE_THREAD } from '../constants/types'

const messageReducer = (threads = [], action) => {
    switch (action.type) {
        case GET_THREADS:
            return action.payload
        case CREATE_THREAD:
            return [...threads, action.payload]
        case UPDATE_THREAD:
            return threads.map((thread) => (thread._id === action.payload.id ? action.payload.thread : thread))
        case DELETE_THREAD:
            return threads.filter((thread) => thread._id !== action.payload)
        default:
            return threads
    }
}

export default messageReducer