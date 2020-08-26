const HistoryWatch = require('../Models/HistoryWatch');

module.exports = {
    getAll : async (req, res) => {
        try{
            const history = await HistoryWatch.find({})
            .populate({path:'id_user', select: 'username fullname' })
            .populate({ path: 'id_movie', select: 'title url_trailer'})
            .populate({ path:'id_subscriptions', select: '_id'})
          
            if(history){
                res.send({
                    message: 'get all data',
                    data: history
                })
            } else {
                res.status(400).json({
                    message: 'failed to get data'
                })
            }
        }
        catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    },
    createOne: async (req, res) => {
        try {
            const {id_movie, id_user, id_subscriptions} = req.body
            const newHistory = await HistoryWatch
            .create({
                id_movie,
                id_user,
                id_subscriptions
            })
            if(newHistory) {
                res.status(200).json({
                    message: `success add history`,
                    newHistory
                })
            } else {
                res.status(400).json({
                    message: `failed`
                })
            }
        }
        catch(error) {
            console.log(error);
        }
    }
}
