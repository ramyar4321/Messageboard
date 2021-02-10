import React from 'react'
import Reply from './Reply/Reply'
import { Grid } from '@material-ui/core';

const Replies = ( { replyMessages} ) => {
    const {replies} = replyMessages
    console.log(replies)
    console.log(replyMessages)

    return(
        <Grid>
            {replies.map((reply) => 
                <Reply reply={reply}/>
            )}
        </Grid>
    )
}

export default Replies