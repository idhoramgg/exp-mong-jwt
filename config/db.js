const mongoose = require('mongoose')


const url= "mongodb+srv://root:Password123@impactbyte.pdsr8.mongodb.net/impactbyte";
// const database = "impactbyte";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;


module.exports = db;