import users from "../models/user.js"
import { Webhook } from "svix"

const clerkwebhooks = async (req, res) => {
  console.log("🔔 Webhook triggered at", new Date().toISOString())
  console.log("👉 Headers:", req.headers)
  console.log("👉 Raw body (unverified):", JSON.stringify(req.body))

  try {
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

    const headers = {
      'svix-id': req.headers['svix-id'],
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-signature': req.headers['svix-signature']
    }

    const event = wh.verify(JSON.stringify(req.body), headers)
    
    const { data, type } = event

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      userName: `${data.first_name} ${data.last_name}`,
      image: data.image_url,
    }

    switch (type) {
      case 'user.created':
        await users.create(userData)
        break
      case 'user.updated':
        await users.findByIdAndUpdate(data.id, userData)
        break
      case 'user.deleted':
        await users.findByIdAndDelete(data.id)
        break
    }

    res.json({ success: true })
  } catch (err) {
    console.log("Webhook error:", err.message)
    res.status(400).json({ success: false, error: err.message })
  }
}

export default clerkwebhooks
