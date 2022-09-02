const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Actor = sequelize.define(
    "Actor",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        field: 'first_name'
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name'
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      favoriteMovieId: {
        type: DataTypes.INTEGER,
        field: 'favorite_movie_id'
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
      tableName: "actors",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  Actor.associate = (models) => {
    Actor.belongsToMany(models.movieModel, {
      foreignKey: 'actorId',
      otherKey: 'movieId',
      through: models.actorMovieModel,
    });
  }

  return Actor;
};
