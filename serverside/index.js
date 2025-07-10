import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import './configs/db.js'
import { clerkMiddleware } from '@clerk/express'
import clerkwebhooks from './controllers/clerkwebhooks.js'


const app=express()
app.use(cors())  //enable cross resource engine,that is establish a connection between frontend and backend


//middleware
app.use(express.json())
app.use(clerkMiddleware())
//Api to listen to clerkwebhooks
app.use('/api/clerk',clerkwebhooks)




const PORT =process.env.PORT ||3000

app.get('/',(req,res)=>{
    res.send("api is working perfectly")
})

app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`)
})



