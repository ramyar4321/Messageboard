import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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