var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

// Get /flights/new
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.post('/', flightsCtrl.create)
router.get('/', flightsCtrl.index)

module.exports = router;
