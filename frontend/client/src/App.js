import React from 'react'
import {Grid} from '@material-ui/core'
import Form from './components/Form/Form'

const App = () => {
    return (
        <Grid container justify={'center'} spacing ={2}>
            <Form />
        </Grid>
    )
}

export default App