const express = require("express");
const Handlebars = require("handlebars");
const { engine } = require("express-handlebars");
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");
const lessThen = require("./lessThenHelper");
const lastFour = require("./lastFourHelper");


const app = express();
app.engine("handlebars", engine({
    defaultLayout: false,
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: { lessThen: lessThen,
               lastFour: lastFour }
}));

app.set("view engine", "handlebars");
app.set("views", "./Front");
app.use(express.static("./Front/assets"));

module.exports = app;