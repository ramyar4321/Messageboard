import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';

const Reply = ({reply}) => {
    const { title, message, image, createdAt } = reply

    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.image}
                        src={image} component="img" />
                    <CardContent className={classes.content}>
                        <Grid item className={classes.header}>
                            <Typography className={classes.details}>
                                {title}
                        </Typography>
                            <Typography className={classes.details}>
                                {createdAt}
                        </Typography>
                        </Grid>
                        <Typography className={classes.message}>
                            {message}
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Reply