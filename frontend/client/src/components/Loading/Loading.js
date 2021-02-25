import useStyles from './styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CssBaseline, Grid } from '@material-ui/core'

const Loading = () => {
    const classes = useStyles()

    return (
        <CssBaseline>
            <Grid container className={classes.root}>
                <Grid container item xs={12} justify="center" alignContent="center" direction="column">
                    <CircularProgress size={80}/>
                </Grid>
            </Grid>
        </CssBaseline>
    )
}

export default Loading