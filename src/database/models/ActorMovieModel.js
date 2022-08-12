const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ActorMovie = sequelize.define(
    "ActorMovie",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      actorId: {
        type: DataTypes.INTEGER,
        field: 'actor_id'
      },
      movieId: {
        type: DataTypes.INTEGER,
        field: 'movie_id'
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
      tableName: "actor_movie",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  return ActorMovie;
};
