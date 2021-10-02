const express = require('express');
const router = express.Router();
const {getAllPersons, getPerson ,createPersons, updatePerson, deletePerson} = require('../controllers/persons')


router.route('/').get(getAllPersons).post(createPersons);
router.route('/:id').get(getPerson).patch(updatePerson).delete(deletePerson);

module.exports = router;