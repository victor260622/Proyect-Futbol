const express = require("express");
const {create} = require("express-handlebars");
const app = express();
const hbs = create({
    extname: ".hbs",
    defaultLayout: false
});
// Register hbs.engine with the Express app.
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./Front");



module.exports = app;
