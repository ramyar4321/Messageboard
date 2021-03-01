import axios from 'axios';

const url = 'https://message-board-project.herokuapp.com/messages';

export const getThreads = () => axios.get(url)
export const createThread = (message) => axios.post(url, message)
export const updateThread = (id, updateMessage) => axios.patch(`${url}/${id}`, updateMessage)
export const deleteThread = (id) => axios.delete(`${url}/${id}`)