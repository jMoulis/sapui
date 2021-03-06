const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  date: Date,
  type: String,
  provider: String,
  customer: String,
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
  price: Number,
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
