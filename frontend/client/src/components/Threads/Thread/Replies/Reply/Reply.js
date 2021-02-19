import React from 'react';
import { Paper, Grid, Typography} from '@material-ui/core'
import useStyles from './styles'

const Reply = (prop) => {
    const { _id, title, message, inputFile, createdAt } = prop.value

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
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </div>
    )
}

export default Reply