const mongoose = require('mongoose')


const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "User",
        required: false
    }
},{
    timestamps: true
})

const Users = mongoose.model('users', userSchema)

module.exports = Users