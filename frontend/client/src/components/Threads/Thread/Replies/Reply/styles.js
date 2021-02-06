import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginLeft: '5%',
        width: '95%'
    },
    card: {
        display: 'flex',
        flexDirection: 'row'
    },
    image: {
        width:'200px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        alignItems: 'center'
    },
    details: {
        margin: theme.spacing(1,2,1,2)
    },
    message: {
        margin: theme.spacing(2,1,2,1)
    }
})
)