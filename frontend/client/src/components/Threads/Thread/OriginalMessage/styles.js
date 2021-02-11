import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    /*card: {
        //display: 'flex',
        //flexDirection: 'row',
        marginRight: '10%',
        width: '90%',
        //wordBreak: "break-all",
        //alignItems: 'stretch'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        //width: '80%'
    },
    messageImage: {
        //height: '0',
        width:'20%'
    },
    messageContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%'
    },
    messageHeader: {
        //display: 'flex',
        //alignItems: 'center',
    },
    messageDetails: {
        margin: theme.spacing(1,2,1,2)
    },
    messageMessage: {
        margin: theme.spacing(2,1,2,1)
    }*/
    root: {
        flexGrow: 1,
        marginRight: '10%',
        width: '90%',
        wordBreak: "break-all",
        alignItems: 'stretch',
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        //maxWidth: 500,
      },
      image: {
        maxWidth: '50%',
        maxHeight: '50%',
      },
      header: {
          display: 'flex',
          flexDirection: 'row',
      },
      details: {
          marginRight: '20px',
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
})
)