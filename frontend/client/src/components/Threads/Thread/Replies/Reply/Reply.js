import React from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import useStyles from './styles';

const Reply = (reply) => {
    const { id, title, message, image, createdAt } = reply

    const classes = useStyles()
    return (
        <Grid container justify="flex-end">
            <Card className={classes.message}>
                <CardContent>
                    <Typography>
                        Reply Message
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Reply