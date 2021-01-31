import React from 'react'
import {Paper, TextField, Topography, Button} from '@material-ui/core'

const Form = () => {
    return(
        <Paper>
            <form>
            <TextField id="outlined-basic" label="Ttile" variant="outlined" />
            <TextField id="outlined-basic" label="message" variant="outlined" />
            </form>
        </Paper>
    )
}

export default Form