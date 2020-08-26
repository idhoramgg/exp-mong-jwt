const Subscriptions = require('../Models/Subscriptions');
const Users = require('../Models/Users')

module.exports = {
    getAllSubs: async (req, res) => {
        try {
            const subscriptions = await Subscriptions
            .find({})
            .populate('id_user', "-password")
            if(subscriptions) {
                res.status(200).json({
                    message: 'success',
                    subscriptions
                })
            } else {
                res.status(400).json({
                    message: 'failed'
                })
            }
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    },
    addOne: async (req, res) => {
        try {
            const {id_user, status} = req.body
            const newSubs = await Subscriptions.create({
                id_user,
                status
            })
            const user = await Users.findOneAndUpdate(
                {_id: req.body.id_user},
                {$push: {status:newSubs.status}},
                {new: true}
            )
            await user.save()
            if(user) {
                res.status(200).json({
                    message: `Success add one Subscriptions to ID user ${id_user}`,
                    newSubs,
                    user
                })
            } else {
                res.status(400).json({
                    message: `failed to add Subscription for ID user ${id_user}`,
                })
            }
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                message: `Internal server error`
            })
        }
    }
}