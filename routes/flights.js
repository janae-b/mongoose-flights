var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

// Get /flights/new
router.get('/new', flightsCtrl.new)
// Post /flights
router.post('/', flightsCtrl.create)
router.get('/', flightsCtrl.index)

module.exports = router;
