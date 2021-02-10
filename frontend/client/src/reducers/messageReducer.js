import { CREATE_THREAD, DELETE_THREAD } from '../constants/types'

const messageReducer = (threads = [], action) =>{
    switch(action.type){
        case CREATE_THREAD:
            console.log(threads)
            console.log(action.payload)
            //return threads.push(action.payload)
            return [...threads, action.payload]
        case DELETE_THREAD:
            return threads.slice(1)
        default:
            return threads
    }
}

export default messageReducer