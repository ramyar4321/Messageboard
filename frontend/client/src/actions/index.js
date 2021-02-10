import { CREATE_THREAD, DELETE_THREAD } from '../constants/types'

export const createThread = (thread) => {

    return {
        type: CREATE_THREAD,
        payload: thread
    }
}

export const deleteThread = () => {
    return {
        type: DELETE_THREAD
    }
}