const mongoose = require('mongoose');


const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    url_trailer: {
        type: String,
        required: true
    },
}, {timestamps:true})

const Movies = mongoose.model('movies', movieSchema)

module.exports = Movies;