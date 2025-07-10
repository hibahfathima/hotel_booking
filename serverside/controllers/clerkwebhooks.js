import users from "../models/user.js";
//now import webHook function from svix because it contain the userdata
import { Webhook } from "svix";




const clerkwebhooks = async () => {

    try {
        //now create an svix instance with clerk webhook sectret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)


        //getting headers
        const headers = {
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'svix-signature': req.headers['svix-signature']
        }


        //veify the headers
        await whook.verify(JSON.stringify(req.body), headers)


        //geting data from request body
        const { data, type } = req.body
        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            userName: data.first_name + " " + data.last_name,
            image: data.image_url,
            //the right side value in user data come from clerk

        }




        //switch cases for different events here{type}
        switch (type) {
            case 'user.created':{
                await users.create(userData)
                 break;
            }
             case 'user.updated':{
                await users.findByIdAndUpdate(data.id,userData)
                 break;
            }
             case 'user.deleted':{
                await users.find(userData)
                 break;
            }
              default:
                break;
              
                
               
        
           
        }
        res.json({success:true,message:'webook recieved'})

    }
    catch (err) {
        console.log(err.message)
        res.status(401).json({success:false,message:err.message})

    }
}

export default clerkwebhooks