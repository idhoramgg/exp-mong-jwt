const Users = require('../Models/Users');
const { createToken } = require('../helpers/token')

module.exports = {
    getAllData : (req, res) => {
        Users.find()
        .then(result => {
            res.send({
                message: 'get All data',
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'failed'
            })
        })
    },
    addOne: (req, res) => {
        const {fullname, username, email, password, address,role } = req.body

        Users.create({
            fullname,
            username,
            email,
            password,
            address,
            role
        }, (error, result) => {
            if(error){
                res.status(400).json({
                    message: "error"
                })
            }
            else {
                res.status(200).json({
                    message: "success add user", 
                    result
                })
            }
        })
    },
    // fungsi login - generate token
    // createToken
    // login berhasil => kasih token
    // kalo login ga berhasil => respone gagal
    login: async (req, res) => {
        try {
            // find one
            const registeredUser = await Users.findOne({email: req.body.email}) // sukses : obj / gagal: null
            // check password
            if(registeredUser.password === req.body.password){
                const dataUser = {
                    id: registeredUser._id,
                    username: registeredUser.username,
                    email: registeredUser.email
                }
                // user login => kasih token
                const token = createToken(dataUser)
                console.log(token)

                res.status(200).json({
                    message: "Selamat datang",
                    token,
                    user: dataUser
                })
            } else {
                res.status(400).json({
                    message: "Password Salah"
                })
            }
        }
        catch(error) {
            console.log(error)
            res.status(500).json({
                message: "Internal Server Error"
            })
        }



        // login gagal => response gagal
    }
    
}