const mongoose = require('mongoose');

const TaskShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provid a name'],
        trim: true,
        maxLength: [20, 'Name must not be mre than 20 Characters']
    }

    , completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskShema);