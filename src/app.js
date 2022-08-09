const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const indexRouter = require("./routes/index");

const moviesRoutes = require("./routes/moviesRoutes");
const genresRoutes = require("./routes/genresRoutes");
const app = express();

// view engine setup
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
