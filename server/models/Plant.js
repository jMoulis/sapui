const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlantSchema = new Schema({
  name: String,
  products: Array,
  posts: Array,
  date: Date,
});

const Plant = mongoose.model('plant', PlantSchema);

module.exports = Plant;
