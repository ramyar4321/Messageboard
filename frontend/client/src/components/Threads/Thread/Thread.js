import React from 'react'
import {Grid} from '@material-ui/core'
import OriginalMessage from './OriginalMessage/OriginalMessage'
import Replies from './Replies/Replies'

const Thread = (prop) => {
    const { id, originalMessage, replies } = prop.value
    console.log(id)
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