const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index,
};


// function create(req, res) {
//     const flight = new Flight(req.body)
//     flight.save(function(err) {
//         if (err) return res.render('flights/new')
//         console.log(flight)
//         res.redirect('/flights/')
//     })
// }

function create(req, res) {
    Flight.create(req.body, function() {
        res.redirect('/flights');
    })
}

function newFlight(req, res) {
    res.render('flights/new')
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

