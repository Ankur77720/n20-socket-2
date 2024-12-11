const mongoose = require('mongoose');


const userSChema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    socketId: {
        type: String,
        default: null
    }
})


module.exports = mongoose.model('user', userSChema)
