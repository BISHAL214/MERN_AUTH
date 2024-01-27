import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to MongoDb successfully")
}).catch((err) => {
    console.log(err)
})

const app = express()


app.use(express.json())

const port = process.env.PORT

app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
})

app.use("/backend/user", userRoutes);
app.use("/api/auth", authRoutes);