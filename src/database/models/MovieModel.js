const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Movie = sequelize.define(
    "Movie",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      length: {
        type: DataTypes.INTEGER,
      },
      awards: {
        type: DataTypes.INTEGER,
      },
      releaseDate: {
        type: DataTypes.DATE,
        field: "release_date",
      },
      genreId: {
        type: DataTypes.INTEGER,
        field: 'genre_id'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      tableName: "movies",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );


  Movie.associate = (models) => {
    Movie.belongsTo(models.genreModel, {
      as: 'genre',
      foreignKey: 'genreId'
    });

    Movie.belongsToMany(models.actorModel, {
      foreignKey: 'movieId',
      otherKey: 'actorId',
      through: models.actorMovieModel
    });
  }

  return Movie;
};
