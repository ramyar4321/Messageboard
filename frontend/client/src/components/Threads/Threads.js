import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Thread from './Thread/Thread'
import { useDispatch, useSelector } from 'react-redux'
import { deleteThread } from '../../actions/'
import { MAX_NUM_THREADS } from '../../constants/types'


const Threads = () => {
    const threads = useSelector((state) => state.messageReducer)
    const dispatch = useDispatch()

    useEffect( ()=>{
        if (threads.length > MAX_NUM_THREADS){
            //Remove oldest thread
            dispatch(deleteThread(threads[0]._id))
            
        }
    }, [threads, dispatch])

    return (
        <Grid container justify="center">
            <Grid item xs={10}>
                {threads.map((thread) => {
                    console.log(thread)
                    return <Thread key={thread._id} value={thread} />
                })}
            </Grid>
        </Grid>
    )
}

export default Threads