const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  orderId: String,
  productId: {
    type: mongoose.Types.ObjectId,
    ref: 'product',
  },
  plantId: {
    type: mongoose.Types.ObjectId,
    ref: 'plant',
  },
  date: Date,
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
