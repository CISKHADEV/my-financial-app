const express = require('express');
const router = express.Router();
const {getAllPersons} = require('../controllers/persons')

router.route('/').get(getAllPersons);

module.exports = router;