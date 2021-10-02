const mongoose = require('mongoose');

const PersonShema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        telephone: {
            type: Number,
            required: true,
        },

        userId,
        typePerson: {
            type: String,
            enum: ['P', 'S'],
        }
    }
)

module.exports = mongoose.model('Person', PersonShema);