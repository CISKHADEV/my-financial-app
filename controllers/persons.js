const Person = require('../models/Person')
const asyncWrapper = require('../models/Person')
const {createCustomError} = require('../errors/custom-error')

const getAllPersons = async (req, res)=> {
    const persons = await new Person.find();
    res.status(200).json({persons})
}