import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','owner']
    },
    recentSearchCities:[{type:String,required:true}]
},{timestamps:true})

// timesttamps is used to add two data in ti the database
// 1)createdAt-automatically store the time at which user is create
// 2)updatedAt-automatically store the time at which user is last updated
//eg:{
 // "_id": "abc123",
 // "userName": "hiba",
 // "createdAt": "2025-07-10T10:00:00.000Z",
 // "updatedAt": "2025-07-10T10:00:00.000Z"
//}

const users=mongoose.model('users',userSchema)
export default users

//since we are using clerk for sihning purpose,we have to use clerk in the backend also
//so install clerk in the backend as discribed in the clerk website
//after that create a js file in controller for clerk