const express = require('express')
const route = express.Router();

const {
    getAllSubs,
    addOne
} = require('../controllers/Subscriptions')

route.get('/subs', getAllSubs)
route.post('/subs', addOne)

module.exports = route