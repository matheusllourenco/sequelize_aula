const movieModel = require("../database/models/MovieModel");

const moviesController = {
  index: async (request, response) => {
    // SELECT * FROM movies;
    // const movies = await movieModel.findAll();
    const movies = await movieModel.findAll();
    // console.log(movies);

    response.render("moviesList", { movies });
  },
  show: async (request, response) => {
    response.render("moviesDetail", { movie });
  },
};

module.exports = moviesController;
