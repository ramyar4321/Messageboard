import {GET_THREAD_COUNT, INCREMENT } from '../constants/types'

const threadCountReducer = (threadCount = 1, action) =>{
    switch(action.type){
        case GET_THREAD_COUNT:
            return threadCount
        case INCREMENT:
            return threadCount = threadCount+1
        default:
            return threadCount
    }
}

export default threadCountReducer