import React from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';

const Reply = (reply) => {
    const { id, title, message, image, createdAt } = reply


    return (
        <Grid container justify="center">
            <Card>
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