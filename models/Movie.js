const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: { type: String, required: true },
  synopsis: { type: String, required: true },
  genre: { type: String, required: true },
  duration: { type: Number, required: true },
  director: { type: String, required: true },
  actors: { type: [String],default: []},});

module.exports = mongoose.model('Movie', movieSchema);
