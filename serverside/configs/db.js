import mongoose from 'mongoose'

const connectionString = process.env.mongodbUrl

mongoose.connect(connectionString).then(() => {
    console.log(" MongoDB connected successfully")
}).catch((err) => {
    console.error(" MongoDB connection failed:", err.message)
})
