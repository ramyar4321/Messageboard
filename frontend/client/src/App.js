import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getThreads} from './actions/'
import Form from './components/Form/Form'
import Threads from './components/Threads/Threads'


const App = () => {
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getThreads())
    }, [dispatch])
    return (
            <Grid>
                <Form />
                <Threads />
            </Grid>
    )
}

export default App