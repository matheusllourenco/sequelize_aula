const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/movies", moviesController.index);
//router.get('/movies/new', moviesController.new);
//router.get('/movies/recommended', moviesController.recomended);
router.get("/movies/:id", moviesController.show);

module.exports = router;
