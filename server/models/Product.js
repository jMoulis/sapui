const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: String,
  plantId: {
    type: Schema.Types.ObjectId,
    ref: 'plant',
  },
  date: Date,
  plants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'plant',
    },
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'post',
    },
  ],
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
