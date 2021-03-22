var express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

// Get /flights/new
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.createTicket)

module.exports = router;
