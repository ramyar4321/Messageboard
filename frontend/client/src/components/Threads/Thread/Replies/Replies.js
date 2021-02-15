import React from 'react'
import Reply from './Reply/Reply'
import { Grid } from '@material-ui/core';

const Replies = ( { replies} ) => {
    console.log(replies)

    return(
        <Grid>
            {replies.map((reply) => 
                <Reply reply={reply}/>
            )}
        </Grid>
    )
}

export default Replies