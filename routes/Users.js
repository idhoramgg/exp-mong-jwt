const express = require('express')
const route = express.Router();
const { verifyToken } = require('../helpers/token')

const {
    getAllData,
    addOne,
    login
} = require('../controllers/Users')

route.get('/users', getAllData)
route.post('/users', addOne)
route.post('/users/login', login)

module.exports = route