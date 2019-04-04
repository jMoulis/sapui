const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: String,
  plantID: String,
  date: Date,
  plants: Array,
  posts: Array,
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
