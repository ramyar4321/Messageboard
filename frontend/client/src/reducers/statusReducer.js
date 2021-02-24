import { ERROR, LOADING, SUCCESS } from '../constants/types'

const statusReducer = (status = '', action) => {
    switch (action.type) {
        case ERROR:
            status= ERROR
            return status
        case LOADING:
            status= LOADING
            return status
        case SUCCESS:
            status = SUCCESS
            return status
        default:
            return status
    }
}

export default statusReducer