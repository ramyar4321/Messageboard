import mongoose from 'mongoose'
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

    const { id } = req.params

    Thread.findById(id)
    .then((thread) =>{
        res.status(200).json(thread)
    })
    .catch((err) => {
        res.status(404).json({message: "Error: " + err})
    })
}

export const postThread = (req, res) => {
    const { originalMessage, replies } = req.body

    const newThread = new Thread({ originalMessage, replies })

    newThread.save()
    .then((thread) =>{
        res.status(201).json(thread)
    }).catch((err) => {
        res.status(409).json({message: "Error: " + err})
    })
}

export const updateThread = (req, res) => {
    const { id } = req.params
    console.log(id)
    console.log(req.params)
    //console.log(req)
    const reply = req.body
    //console.log(reply)

    Thread.findOneAndUpdate(
        {_id: id},
        {$push: {replies: reply}},
        {new: true}
    ).then((thread) =>{
        //console.log(thread)
        res.status(201).json(thread)
    }).catch((err) => {
        res.status(409).json({message: "Error: " + err})
    })
}

export const deleteThread = (req, res) => {
    const { id } = req.params

    Thread.findOneAndDelete({_id: id})
    .then((thread) =>{
        res.status(200).json(thread)
    })
    .catch((err) => {
        res.status(409).json({message: "Error: " + err})
    })
}