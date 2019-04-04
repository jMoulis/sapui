const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlantSchema = new Schema({
  name: String,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post',
    },
  ],
  date: Date,
});

const Plant = mongoose.model('plant', PlantSchema);

module.exports = Plant;
