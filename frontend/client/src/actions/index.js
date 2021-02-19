import { GET_THREADS, CREATE_THREAD, UPDATE_THREAD, DELETE_THREAD} from '../constants/types'

import * as api from '../api'

export const getThreads = () => async (dispatch) => {
    try {
        const res = await api.getThreads()

        dispatch({ type: GET_THREADS, payload: res.data })
    } catch (error) {
        //TODO
        console.log(error)
        
    }
}

export const createThread = (originalMessage) => async (dispatch) => {
    try {
        const res  = await api.createThread(originalMessage)

        dispatch({ type: CREATE_THREAD, payload: res.data})
    } catch (error) {
        //TODO
        console.log(error)
    }
}

export const updateThread = (id, replyMessage)  => async (dispatch) => {
    try {
        console.log(id)
        console.log(replyMessage)
        const res = await api.updateThread(id, replyMessage)
        console.log(res)

        let payload = {
            id,
            thread: res.data
        }
        
        dispatch({ type: UPDATE_THREAD, payload})
    } catch (error) {
        //TODO
        console.log(error)
    }
}

export const deleteThread = (id)  => async (dispatch) => {
    try {
        await api.updateThread(id)
        
        dispatch({ type: DELETE_THREAD, payload: id})
    } catch (error) {
        //TODO
        console.log(error)
    }
}