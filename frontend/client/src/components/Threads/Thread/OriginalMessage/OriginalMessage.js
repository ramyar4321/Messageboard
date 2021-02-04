import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles'

const OriginalMessage = (orginalMessage) => {
    const { id, title, message, image, createdAt } = orginalMessage
    
    const classes = useStyles()

    return (
        <Grid container justify="flex-start">
            <Card className={classes.message}>
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