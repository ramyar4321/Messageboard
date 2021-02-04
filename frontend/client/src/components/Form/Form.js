import React from 'react'
import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core'
import useStyles from './styles'
import FileBase from 'react-file-base64'

const Form = () => {
    const classes = useStyles()

    const handleSubmit = (e) => {
        //TODO
    }

    return (
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} sm={8} md={6}>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                        <Typography variant="h6">Create New Message Thread</Typography>
                        <TextField name="title" variant="outlined" label="Title" fullWidth />
                        <TextField name="message" variant="filled" label="Message" multiline rows={5} rowsMax={5} fullWidth />
                        <div className={classes.inputFile}>
                            <FileBase multiple={false} onDone={(base64) => { }} />
                        </div>
                        <Button variant="contained" color="primary" size="large" fullWidth>Submit</Button>
                        <Button variant="contained" color="secondary" size="medium" fullWidth>Clear</Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Form