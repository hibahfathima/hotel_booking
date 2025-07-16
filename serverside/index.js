import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
import './configs/db.js'
import router from './routes/route.js'

const app = express()
app.use(express.json())

app.use(cors())


app.use(clerkMiddleware())
app.use(router)



app.get('/', (req, res) => {
  res.send("API is working perfectly")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})
