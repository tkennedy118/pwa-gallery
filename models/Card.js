const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },

  text: {
    type: String,
    trim: true,
    required: "Text is required"
  },

  imageURL: {
    type: String,
    required: true
  }
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;