const mongoose = require('mongoose');

const { Schema } = mongoose;

const BuySchema = new Schema({
  date: Date,
  post: {
    type: Schema.Types.ObjectId,
    ref: 'post',
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'product',
  },
  plant: {
    type: Schema.Types.ObjectId,
    ref: 'plant',
  },
  quantity: Number,
  delivered: Date,
});

const Buy = mongoose.model('buy', BuySchema);

module.exports = Buy;
