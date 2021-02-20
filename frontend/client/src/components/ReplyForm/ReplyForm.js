import React, { useState } from 'react'
import { IconButton, Dialog, DialogContent, DialogTitle, Grid, Paper, TextField, Typography, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {updateThread} from '../../actions/'
import CloseIcon from '@material-ui/icons/Close'
import useStyles from './styles'
import FileBase from 'react-file-base64'

const ReplyForm = (props) => {
  const { threadID, openReplyForm, setOpenReplyForm } = props
  const [formState, setFormState] = useState({ message: '', inputFile: '' })
  const dispatch = useDispatch()

  console.log(threadID)

  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create and store thread
    let today = new Date().toISOString()
    //let today = new Date.now()
    let replyMessage = { ...formState, createdAt: today }

    dispatch(updateThread(threadID, replyMessage))
    setFormState({ message: '', inputFile: '' })
    setOpenReplyForm(false)

  }

  const handleClose = () => {
    setOpenReplyForm(false)
    handleClear()
  }

  const handleClear = () => {
    setFormState({ message: '', inputFile: '' })
  }

  return (
    <Dialog open={openReplyForm}>
      <DialogTitle>
        <div>
          <Typography variant="h6">Reply Form</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} >
            <Paper className={classes.paper}>
              <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <TextField name="message" variant="filled" label="Message" multiline rows={5} rowsMax={5} fullWidth value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} />
                <div className={classes.inputFile}>
                  <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormState({ ...formState, inputFile: base64 })} />
                </div>
                <Button variant="contained" color="primary" size="large" fullWidth onClick={handleSubmit}>Submit</Button>
                <Button variant="contained" color="secondary" size="medium" fullWidth onClick={handleClear}>Clear</Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )


}

export default ReplyForm