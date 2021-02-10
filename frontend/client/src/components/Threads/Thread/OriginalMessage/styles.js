import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginRight: '20%',
        width: '95%',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: '10%',
        width: '90%',
        wordBreak: "break-all",
        alignItems: 'stretch'
    },
    image: {
        width:'20%'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%'
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