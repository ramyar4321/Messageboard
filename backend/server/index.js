import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/messages.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

//app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/messages', router)


mongoose.connect(process.env.CONNECTION_URL,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Successfully connected to database")
    }).catch((err) =>
        console.log("Connection failed with error:" + err)
    );

app.listen(process.env.PORT, () => {
    console.log("Succesfully running server on PORT " + process.env.PORT)
}).on('error', (err) => {
    if (err.errno === 'EADDRINUSE') {
        console.log("PORT " + process.env.PORT + " in use")
    } else {
        console.log(err)
    }
})

