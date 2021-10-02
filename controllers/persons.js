const Person = require('../models/Person')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllPersons = asyncWrapper(async (req, res)=> {
        const persons = await Person.find();
        res.status(200).json({persons})
    }
) 


const createPersons = asyncWrapper(async (req, res)=> {
        const person = await Person.create(req.body);
        res.status(201).json({person})
    }
)

const getPerson = asyncWrapper(async (req, res, next)=> {
    const {id: personId}  = req.params;
    const person = await Person.findOne({_id: personId})

    if(!person) {
        return next(createCustomError(`No person with id : ${personId}`, 404))
    }

    return res.status(200).json({person})
}) 

const updatePerson = asyncWrapper(async (req, res, next)=> {
    const {id: personId} = req.params;
    const person = await Person.findOneAndUpdate({_id: personId}, req.body)

    if(!person)
        return next(createCustomError(`No person with id : ${personId}`, 404))

    return res.status(200).json({person})
})

const deletePerson = asyncWrapper(async (req, res, next)=> {
    const {id: personId} = req.params;
    const person = await Person.deleteOne({_id: personId})

    if(!person)
        return next(createCustomError(`No person with id : ${personId}`, 404))

    return res.status(200).json({person})
})

module.exports = {
    getAllPersons, getPerson ,createPersons, updatePerson, deletePerson
}
  