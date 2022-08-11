const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/movies", moviesController.index);

router.post("/movies", moviesController.create);
router.get("/movies/add", moviesController.addMovieScreen);
router.get("/movies/:id", moviesController.show);

//Extra
//router.get('/movies/new', moviesController.new);
//router.get('/movies/recommended', moviesController.recomended);

router.get("/movies/edit/:id", moviesController.updateMovieScreen);
router.put("/movies/:id", moviesController.update);

router.get("/movies/delete/:id", moviesController.deleteMovieScreen);
router.delete("/movies/:id", moviesController.delete);

module.exports = router;
