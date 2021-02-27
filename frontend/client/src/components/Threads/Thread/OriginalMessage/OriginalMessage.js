import React from 'react';
import { Paper, Grid, Typography} from '@material-ui/core'
import useStyles from './styles'
import ReplyButton from '../../../ReplyButton/ReplyButton'

const OriginalMessage = (props) => {
    const { _id:id, createdAt, inputFile, message, title } = props.originalMessage
    const threadID = props.threadID
    const threadLimitReached= props.threadLimitReached

    const classes = useStyles()

    return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item className={classes.image}>
                            <img className={classes.img} src={inputFile} />
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Grid item className = {classes.header}>
                                        <Typography className={classes.details} variant="subtitle1">
                                            {title}
                                        </Typography>
                                        <Typography className={classes.details} variant="subtitle1">
                                            {createdAt}
                                        </Typography>
                                    </Grid>
                                    <Typography variant="body1">
                                        {message}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <ReplyButton threadID={threadID}  isButtonDisabled={threadLimitReached}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
    )
}

export default OriginalMessage