import React, {useState, useEffect} from 'react'
import {Grid} from '@material-ui/core'
import OriginalMessage from './OriginalMessage/OriginalMessage'
import Replies from './Replies/Replies'
import { MAX_NUM_REPLIES } from '../../../constants/types'

const Thread = (prop) => {
    const { _id, originalMessage, replies } = prop.value
    const [threadLimitReached, setThreadLimitReached] = useState(false)

    useEffect(() =>{
        if( replies.length >= MAX_NUM_REPLIES){
            setThreadLimitReached(true)
        }
    }, [replies])

    return (
        <Grid>
            <OriginalMessage threadID={_id} originalMessage={originalMessage} threadLimitReached={threadLimitReached} />
            <Replies replies={replies} />
        </Grid>
    )
}

export default Thread