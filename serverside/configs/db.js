//in this file we are connecting our mongoDB with backend
 import mongoose from 'mongoose'
 const connectionString=process.env.mongodbUrl


 mongoose.connect(connectionString).then((res)=>{
    console.log("mongoDB connected successfully")
 }).catch((err)=>{
    console.log("something went wrong due to ",err)
 })
