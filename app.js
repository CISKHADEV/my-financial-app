const express = require('express');
const connectDB = require('./db/connect');
const tasks = require('./routes/tasks')
const persons = require('./routes/persons')
require('dotenv').config();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const app = express()
const port = process.env.PORT || 3000;

//middlware
app.use(express.json());
app.use(express.static('./public'));


// routes
app.use('/api/v1/tasks', tasks);
app.use('/api/v1/persons', persons);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`))
        
    } catch (error) {
        console.log(error);
    }
}

start()

