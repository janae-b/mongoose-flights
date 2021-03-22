const Destination = require('../models/destination')

module.exports = {
    new: newDestination
}

function newDestination(req, res) {
    Destination.find({}, function(err, destinations){
        res.render('destinations/new', {
            title: "Add Destination",
            destinations
        })
    })
}