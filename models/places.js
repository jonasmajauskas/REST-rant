const mongoose = require('mongoose')
const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true },
  pic: { type: String },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: { type: Number }
})

module.exports = mongoose.model('Place', placeSchema); //create a place using the place schema

// const Place = mongoose.model('Place', placeSchema); //create a place using the place schema
// module.exports = Place;