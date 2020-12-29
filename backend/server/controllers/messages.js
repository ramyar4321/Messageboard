import Thread from '../models/thread.model.js'

export const getThreads = (req, res) => {
    Thread.find()
    .then((threads) => {
        res.status(200).json(threads)
    }).catch((err) => {
        res.status(404).json({message: "Error: " + err})
    })
}

export const getThread = (req, res) => {

    const { id } = req.param.id

    Thread.findById(id)
    .then((thread) =>{
        res.status(200).json(thread)
    })
    .catch((err) => {
        res.status(404).json({message: "Error: " + err})
    })
}

export const postThread = (req, res) => {
    const { orginalPost, replies } = req.body

    const newThread = new Thread({ orginalPost, replies })

    newThread.save()
    .then(() =>{
        res.status(201).json({message: "Thread added"})
    }).catch((err) => {
        res.status(409).json({message: "Error: " + err})
    })
}

export const updateThread = (req, res) => {
    const { id } = req.param.id
    const { replies } = req.body

    Thread.findOneAndUpdate(
        {_id: id},
        {$push: replies}
    ).then(() =>{
        res.status(201).json({message: "Thread updated"})
    }).catch((err) => {
        res.status(409).json({message: "Error: " + err})
    })
}

export const deleteThread = (req, res) => {
    const { id } = req.param.id

    Thread.findOneAndDelete(id)
    .then((thread) =>{
        res.status(200).json(thread)
    })
    .catch((err) => {
        res.status(409).json({message: "Error: " + err})
    })
}