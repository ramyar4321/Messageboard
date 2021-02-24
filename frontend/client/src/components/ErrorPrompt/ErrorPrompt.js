import React from 'react'
import useStyles from './styles'
import ErrorIcon from '@material-ui/icons/Error'
import { Typography, Grid, CssBaseline } from '@material-ui/core'


const ErrorPrompt = () => {
    const classes = useStyles()

    return (
        <CssBaseline>
            <Grid container className={classes.root}>
                <Grid container item xs={12} justify="center" alignContent="center" direction="column" className={classes.paper}>
                    <ErrorIcon className={classes.errorIcon} />
                    <Typography variant="h2" className={classes.errorText}>Oops!!!</Typography>
                    <Typography variant="h6" className={classes.errorText}>Something went wrong...</Typography>
                </Grid>
            </Grid>
        </CssBaseline>
    )
}

export default ErrorPrompt