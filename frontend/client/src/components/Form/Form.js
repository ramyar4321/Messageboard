import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createThread, incrementThreadCounter} from '../../actions/'
import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core'
import useStyles from './styles'
import FileBase from 'react-file-base64'


const Form = () => {
    const [formState, setFormState] = useState({title: '', message: '', inputFile: ''})
    const dispatch = useDispatch()

    const classes = useStyles()


    const handleSubmit = (e) => {
        e.preventDefault()

        // Create and store thread
        let today = new Date().toISOString()
        let originalMessage = {...formState, createdAt: today}
        let replies = []
        let message = {originalMessage, replies}


        dispatch(createThread(message))
    }

    const handleClear = () => {
        setFormState({title: '', message: '', inputFile: ''})
    }

    return (
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} sm={8} md={6}>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                        <Typography variant="h6">Create New Message Thread</Typography>
                        <TextField name="title" variant="outlined" label="Title" fullWidth value={formState.title} onChange={(e) => setFormState({...formState, title: e.target.value})}/>
                        <TextField name="message" variant="filled" label="Message" multiline rows={5} rowsMax={5} fullWidth value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})}/>
                        <div className={classes.inputFile}>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormState({ ...formState, inputFile: base64})} />
                        </div>
                        <Button variant="contained" color="primary" size="large" fullWidth onClick={handleSubmit}>Submit</Button>
                        <Button variant="contained" color="secondary" size="medium" fullWidth onClick={handleClear}>Clear</Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Form