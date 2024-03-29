import React from 'react'
import Reply from './Reply/Reply'
import { Grid } from '@material-ui/core';

const Replies = ( { replies} ) => {

    return(
        <Grid>
            {replies.map((reply) => 
                <Reply key={reply._id} value={reply}/>
            )}
        </Grid>
    )
}

export default Replies