const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  orderId: String,
  productId: String,
  planId: String,
  date: Date,
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
