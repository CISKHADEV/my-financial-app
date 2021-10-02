const mongoose = require('mongoose');

const PersonShema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Must provide fisrt Name' ]
        },

        lastName: {
            type: String,
            required: [true, 'Must provide last Name' ]
        },

        telephone: {
            type: Number,
            required: [true, 'Must provide telephone' ],
        },

        userId: String,
        typePerson: {
            type: String,
            enum: ['P', 'S'],
        }
    }
)

module.exports = mongoose.model('Person', PersonShema);