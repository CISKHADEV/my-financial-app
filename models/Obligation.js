const { POINT_CONVERSION_HYBRID } = require('constants');
const mongoose = require('mongoose');

const ObligationShema = new mongoose.Schema({
    dateCreation: {
        type: Date,
        default: new Date()
    },
    personId,
    accountId,
    obligationTypeId

})

module.exports = mongoose.model('Obligation', ObligationShema);