import React from 'react'
import Reply from './Reply/Reply'
import { Grid } from '@material-ui/core';

const Replies = (prop) => {
    const {replies} = prop
    console.log(prop)
    console.log(replies)
    return(
        <Grid>
            {replies.map((reply) => 
                <Reply key={reply.id} value={reply} />
            )}
        </Grid>
    )
}

export default Replies