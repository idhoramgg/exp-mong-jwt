const express = require('express')
const route = express.Router();
const { verifyToken } = require('../helpers/token')


const {
    getAllData,
    addOne
} = require('../controllers/Movies')

route.get('/movies',verifyToken, getAllData)
route.post('/movies',verifyToken, addOne)

module.exports = route