const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://sadikh:1234@cluster0.vmqzp.mongodb.net/taskManagerDatabase?retryWrites=true&w=majority';


const connectDB = (url) => {
    return mongoose.connect(url, 
        {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
        });
}

module.exports = connectDB
               