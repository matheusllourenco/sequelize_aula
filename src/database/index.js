const sequelize = require('./config');

const db = {
  genreModel: require('./models/GenreModel')(sequelize),
  actorModel: require('./models/ActorModel')(sequelize),
  movieModel: require('./models/MovieModel')(sequelize),
  actorMovieModel: require('./models/ActorMovieModel')(sequelize),
}

// ['genreModel', 'actorModel', 'movie'];

console.log(Object.keys(db));

Object.keys(db).forEach(modelName => {
  console.log(modelName)
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;