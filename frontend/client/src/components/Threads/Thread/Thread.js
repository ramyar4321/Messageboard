import React from 'react'
import {Grid} from '@material-ui/core'
import OriginalMessage from './OriginalMessage/OriginalMessage'
import Replies from './Replies/Replies'

const Thread = ({ thread }) => {
    const { originalMessage, replies } = thread
    console.log(thread)
    console.log(originalMessage)
    console.log(replies)

    return (
        <Grid>
            <OriginalMessage originalMessage={originalMessage} />
            <Replies replies={replies} />
        </Grid>
    )
}

export default Thread