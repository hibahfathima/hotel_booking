import express from 'express'
import clerkwebhooks from '../controllers/clerkwebhooks.js'


const router=express.Router()
router.post("/api/clerk", clerkwebhooks)


export default router
