const Flight = require('../models/flight')

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
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights')
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight'});
}

function index(req, res) {
    Flight.find({}, function(err, flights){
    console.log('flights', flights)
    res.render('flights/index', {
        flights: flights,
        title: 'All Flights'
        })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {
            title: 'Flight Detail',
            flight
        })
    })
}


