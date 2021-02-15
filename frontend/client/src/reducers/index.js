import { combineReducers } from 'redux'

import messageReducer from './messageReducer'
import threadCountReducer from './threadCountReducer'

const allReducers = combineReducers({
    messageReducer,
    threadCountReducer
})

export default allReducers

