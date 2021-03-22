const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
      type: String, 
      match: /[A-F][1-9]\d?/
    },
    price: {
      type: Number,
      min: 0,
    }, 
},  {
    timestamps: true
})
	
const flightSchema = new Schema({
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United']
  },
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN' 
  },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999
  },
    depart: {
      type: Date,
      default: () => Date.now() + 365 * 24 * 60 * 60 *1000,
    }, 
    tickets: [ticketSchema],
    destination: [{type: Schema.Types.ObjectId, ref: 'Destination'}]
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);