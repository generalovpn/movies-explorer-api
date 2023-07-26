const movieRouter = require('express').Router();
const {
  validationCreateMovie,
  validationMovieId,
} = require('../utils/validation');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.post('/', validationCreateMovie, createMovie);
movieRouter.delete('/:_id', validationMovieId, deleteMovie);

module.exports = movieRouter;
