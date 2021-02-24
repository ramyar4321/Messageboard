import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getThreads } from './actions/'
import { ERROR, LOADING, SUCCESS } from './constants/types'
import ErrorPrompt from './components/ErrorPrompt/ErrorPrompt'
import Loading from './components/Loading/Loading'
import Form from './components/Form/Form'
import Threads from './components/Threads/Threads'


const App = () => {
    const status = useSelector((state) => state.statusReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getThreads())
    }, [dispatch])
    return (
        <Grid>
            {status === ERROR
                ? <ErrorPrompt />
                : status === LOADING
                    ? <Loading />
                    : <Grid>
                        <Form />
                        <Threads />
                    </Grid>}
        </Grid>
    )
}

export default App