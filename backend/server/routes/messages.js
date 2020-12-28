import express from 'express'
import {getThreads, getThread, postThread, updateThread, deleteThread} from '../controllers/messages.js'

const router = express.Router()

router.route('/').get(getThreads)
router.route('/:id').get(getThread)
router.route('/').post(postThread)
router.route('/:id').patch(updateThread)
router.route('/:id').delete(deleteThread)

export default router