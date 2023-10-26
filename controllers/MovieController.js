const Movie = require("../models/Movie");

exports.listAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send(err);
  }
};


exports.createNewMovie = async (req, res) => {
  const newMovie = new Movie(req.body);
  try {
    const movie = await newMovie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).send(err);
  }
};

