import useStyles from './styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Grid } from '@material-ui/core'

const Loading = () => {
    const classes = useStyles()

    return (
        <Grid container justify="center">
            <Grid item xs={12} className={classes.root}>
                <CircularProgress />
            </Grid>
        </Grid>
    )
}

export default Loading