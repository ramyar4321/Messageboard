import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import useStyles from './styles'

const OriginalMessage = ({ originalMessage }) => {
    const { createdAt, inputFile, message, title } = originalMessage
    console.log(originalMessage)
    console.log(title)
    console.log(message)
    console.log(createdAt)

    const classes = useStyles()

    return (
        <>
            <Card className={classes.card} >
                <CardMedia
                    className={classes.image}
                    image={inputFile} />
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

        </>
    )
}

export default OriginalMessage