const sequelize = require('./config');

const db = {
  genreModel: require('./models/GenreModel')(sequelize),
  actorModel: require('./models/ActorModel')(sequelize),
  movieModel: require('./models/MovieModel')(sequelize),
  actorMovieModel: require('./models/ActorMovieModel')(sequelize),
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;