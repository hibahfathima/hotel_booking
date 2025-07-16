import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'owner']
    },
    recentSearchCities: [{ type: String, required: true }]
}, { timestamps: true })

const users = mongoose.model('users', userSchema)
export default users
