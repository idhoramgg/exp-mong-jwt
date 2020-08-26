const mongoose = require('mongoose');


const Schema = mongoose.Schema

const subscriptionSchema = new Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        ref: 'users', 
        required: true
    },
    status: {
        type: Boolean,
    }
   
}, {timestamps:true})

const Subscriptions = mongoose.model('subscriptions', subscriptionSchema)

module.exports = Subscriptions;