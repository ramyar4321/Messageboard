import React from 'react'
import { Grid } from '@material-ui/core'
import Thread from './Thread/Thread'
import { useDispatch, useSelector } from 'react-redux'
import {deleteThread} from '../../actions/'
import {MAX_NUM_THREADS} from '../../constants/types'

const Threads = () => {

    const threads = useSelector((state) => state.messageReducer)
    const dispatch = useDispatch()

    //We want a maximum of 4 threads total.
    // If number of threads is greater the 4,
    // remove the oldest thread
    if (threads.length > MAX_NUM_THREADS){
        dispatch(deleteThread())
    }

    return (
        <Grid container justify="center">
            <Grid item xs={10}>
                {threads.map((thread) => {
                    console.log(thread)
                    return <Thread thread={thread} />
                })}
            </Grid>
        </Grid>
    )
}

export default Threads