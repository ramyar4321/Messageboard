import { CREATE_THREAD, UPDATE_THREAD, DELETE_THREAD,GET_THREAD_COUNT, INCREMENT } from '../constants/types'

export const createThread = (thread) => {

    return {
        type: CREATE_THREAD,
        payload: thread
    }
}

export const updateThread = (id, reply) => {
    return {
        type: UPDATE_THREAD,
        payload: {
            id,
            reply
        }
    }
}

export const deleteThread = () => {
    return {
        type: DELETE_THREAD
    }
}

export const getThreadCount = () => {
    return {
        type: GET_THREAD_COUNT
    }
}

export const incrementThreadCounter = () => {
    return {
        type: INCREMENT
    }
}