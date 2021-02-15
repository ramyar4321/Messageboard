import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            backgroundColor: 'white',
          },
          '& .MuiButton-root': {
            marginBottom: theme.spacing(2)
          },
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputFile: {
        width: '90%',
        margin: '8px 0',
    },
}))