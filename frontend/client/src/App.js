import React from 'react'
import { Grid } from '@material-ui/core'
import Form from './components/Form/Form'
import Threads from './components/Threads/Threads'

const App = () => {
    return (
        <Grid>
            <Form />
            <Threads />
        </Grid>
    )
}

export default App