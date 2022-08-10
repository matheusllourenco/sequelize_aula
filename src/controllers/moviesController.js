const { Op } = require("sequelize");
const sequelize = require("../database/config");
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
    const { id } = request.params;

    const movie = await movieModel.findByPk(id);
    // const movie = await movieModel.findOne({
    //   where: {
    //     awards: {
    //       [Op.or]: [3, 11],
    //     },
    //   },
    // });

    response.render("moviesDetail", { movie: movie });
  },
  addMovieScreen: async (request, response) => {
    response.render("moviesAdd");
  },
  create: async (request, response) => {
    const { title, rating, releaseDate, awards, length } = request.body;

    await movieModel.create({ title, rating, releaseDate, awards, length });

    response.redirect("/movies");
  },
};

module.exports = moviesController;
