const { genreModel } = require("../database");

const genresController = {
  index: async (request, response) => {
    const genres = await genreModel.findAll({
      include: ['movies']
    });

    response.json({ genres });
  }
}

module.exports = genresController;