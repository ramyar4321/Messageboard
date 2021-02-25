import { GET_THREADS, CREATE_THREAD, UPDATE_THREAD, DELETE_THREAD, ERROR, LOADING, SUCCESS } from '../constants/types'

import * as api from '../api'

export const getThreads = () => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await api.getThreads()

        dispatch({ type: GET_THREADS, payload: res.data })
        dispatch({ type: SUCCESS })
    } catch (error) {
        dispatch({ type: ERROR })
    }
}

export const createThread = (originalMessage) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await api.createThread(originalMessage)

        dispatch({ type: CREATE_THREAD, payload: res.data })
        dispatch({ type: SUCCESS })
    } catch (error) {
        dispatch({ type: ERROR })
    }
}

export const updateThread = (id, replyMessage) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const res = await api.updateThread(id, replyMessage)

        let payload = {
            id,
            thread: res.data
        }

        dispatch({ type: UPDATE_THREAD, payload })
        dispatch({ type: SUCCESS })
    } catch (error) {
        dispatch({ type: ERROR })
    }
}

export const deleteThread = (id) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        await api.deleteThread(id)

        dispatch({ type: DELETE_THREAD, payload: id })
        dispatch({ type: SUCCESS })
    } catch (error) {
        dispatch({ type: ERROR })
    }
}