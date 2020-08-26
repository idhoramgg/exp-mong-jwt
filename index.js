const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')
const cors = require('cors')

const userRouter = require('./routes/Users')
const movieRouter = require('./routes/Movies')
const subsRouter = require('./routes/Subscriptions')
const historyRouter = require('./routes/HistoryWatch')

const app = express()

const API_PORT = 8000 || process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/api', userRouter)
app.use('/api', movieRouter)
app.use('/api', subsRouter)
app.use('/api', historyRouter)

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('we re connected'));

app.listen(API_PORT, ()=> {
    console.log(`connected, port ${API_PORT}`)
})

// test