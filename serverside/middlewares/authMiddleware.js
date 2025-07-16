import users from "../models/user"

//middleware to check the user is authenticated or not
export const protect = async (req,res,next)=>{
    const {userId}=req.auth
    if(!userId){
        res.json({success:false,message:'user not autheiticated'})
    }
    else{
        const user=await users.findById(userId)
        req.user=user
        next;
    }
}