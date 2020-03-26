import mongoose from 'mongoose'

export const UserSchema = mongoose.Schema({
    email: {
        type : String, 
        required: true,
        unique: true,
        dropUps: true,
    },
    username: {
        type : String, 
        required: true,
        unique: true,
        dropUps: true,
    },
    password: {
        type: String,
        required: true
    },
    emergency: {
        name: {
            type: String,
        },
        phno: {
            type: String,
        },
    },
})
export var User = mongoose.model('User', UserSchema)