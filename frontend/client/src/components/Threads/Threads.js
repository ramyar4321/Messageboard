import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import Thread from './Thread/Thread'

const Threads = () => {

    const threads = [
        {
            id: "1",
            originalMessage: {
                id: "2",
                title: "Title1",
                message: "Thread1",
                image: "Image",
                createdAt: ""
            },
            replies: [
                {
                    id: "3",
                    message: "First Reply",
                    image: "ImageE",
                    createdAt: "Date"
                },
                {
                    id: "4",
                    message: "First Reply",
                    image: "ImageE",
                    createdAt: "Date"
                }
            ]
        },
        {
            id: "5",
            originalMessage: {
                id: "6",
                title: "Title2",
                message: "Thread2",
                image: "Image",
                createdAt: ""
            },
            replies: [
                {
                    id: "7",
                    message: "First Reply",
                    image: "ImageE",
                    createdAt: "Date"
                },
                {
                    id: "8",
                    message: "First Reply",
                    image: "ImageE",
                    createdAt: "Date"
                }
            ]
        }
    ]

    return (
        <Grid container justify="center">
            <Grid item xs={10}>
                {threads.map((thread) =>
                    <Thread key={thread.id} value={thread} />
                )}
            </Grid>
        </Grid>
    )
}

export default Threads