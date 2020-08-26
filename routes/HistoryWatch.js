const express = require('express')
const route = express.Router();

const {
    getAll,
    createOne
  
} = require('../controllers/HistoryWatch')

route.get('/history', getAll)
route.post('/history', createOne)

module.exports = route