import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to MongoDb successfully")
}).catch((err) => {
    console.log(err)
})

const app = express()
const port = process.env.PORT

app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
})