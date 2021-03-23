var express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')
const destinationsCtrl = require('../controllers/destinations')

// Get /flights/new
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.createTicket)
router.post('/:id/destinations', destinationsCtrl.addToDestinations)

module.exports = router;
