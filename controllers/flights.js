const Flight = require('../models/flight')
const Destination = require('../models/destination')

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    createTicket
};

function createTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.tickets.push(req.body)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
      if (err){ return res.redirect('/flights/new')} 
      res.redirect(`/flights/${flight._id}`)
    })
  }

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'});
}

function index(req, res) {
    Flight.find({}, function(err, flights){
    console.log('flights', flights)
    res.render('flights/index', {
        title: 'All Flights',
        flights: flights
        })
    })
}

function show(req,res){
    Flight.findById(req.params.id)
    .populate('destination').exec(function(err, flight){
        Destination.find({_id: {$nin: flight.destination}},
            function(err, destination){
                res.render('flights/show',{title: 'Flight Details', flight, destination})
            })
    })
}


