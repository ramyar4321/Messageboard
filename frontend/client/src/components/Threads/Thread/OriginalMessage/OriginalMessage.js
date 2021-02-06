import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import useStyles from './styles'
import img from '../../../../images/spacecowboy.jpg'

const OriginalMessage = (orginalMessage) => {
    const { id, title, message, image, createdAt } = orginalMessage

    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <Card className={classes.card} >
                    <CardMedia
                        className={classes.image}
                        src={img} component="img" />
                    <CardContent className={classes.content}>
                        <Grid item className={classes.header}>
                            <Typography className={classes.details}>
                                Orginal Message Title
                        </Typography>
                            <Typography className={classes.details}>
                                Orginal Message Date
                        </Typography>
                        </Grid>
                        <Typography className={classes.message}>
                            Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message
                            Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message
                            Long Message Long Message Long Message Long Message Long Message Long Message Long Message Long Message
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default OriginalMessage