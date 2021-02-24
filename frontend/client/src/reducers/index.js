import { combineReducers } from 'redux'

import messageReducer from './messageReducer'
import statusReducer from './statusReducer'

const allReducers = combineReducers({
    messageReducer,
    statusReducer
})

export default allReducers

