require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

app.locals.appTitle = `Restaurants app`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const mapsRoutes = require("./routes/maps.routes");
app.use("/mapas", mapsRoutes);

const restaurantsRoutes = require("./routes/restaurants.routes");
app.use("/restaurantes", restaurantsRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

require("./error-handling")(app);

module.exports = app;