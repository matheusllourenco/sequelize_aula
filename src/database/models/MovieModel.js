const { DataTypes } = require("sequelize");

const sequelize = require("../config");
const Genre = require("./GenreModel");

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

Movie.belongsTo(Genre, {
  as: 'genre',
  foreignKey: 'genreId'
});

module.exports = Movie;
