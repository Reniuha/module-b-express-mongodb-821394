const express = require('express');
const getTravel  = require('../controllers/travelController')

const router = express.Router()

// Define a route
router.get('/', getTravel)

module.exports = router;