const mongoose = require('mongoose');

const AccountShema = new mongoose.Schema({
    dateCreation: {
        type: Date,
        default: new Date()
    },
    personId,
    description
})

module.exports = mongoose.model('Account', AccountShema);