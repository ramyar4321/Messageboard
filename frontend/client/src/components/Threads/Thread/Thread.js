import React from 'react'
import {Grid} from '@material-ui/core'
import OriginalMessage from './OriginalMessage/OriginalMessage'
import Replies from './Replies/Replies'

const Thread = (prop) => {
    const { _id, originalMessage, replies } = prop.value

    return (
        <Grid>
            <OriginalMessage threadID={_id} originalMessage={originalMessage} />
            <Replies replies={replies} />
        </Grid>
    )
}

export default Thread