import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const OriginalMessage = (orginalMessage) => {
    const { id, title, message, image, createdAt } = orginalMessage



    return (
        <Grid container justify="center" spacing={2}>
            <Card>
                <CardContent>
                    <Typography>
                        Orginal Message
                </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default OriginalMessage