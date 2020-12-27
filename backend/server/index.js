//import frameworks and libraries
import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const app = express()

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

