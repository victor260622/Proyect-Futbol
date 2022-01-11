const db = require("./Back/db");
const app = require("./Back/express");
const Robot = require("./Back/robot");
const port = process.env.PORT || 8888;
const robotmin = process.env.robotmin || 10;





const puntuajeModelo = require("./Back/posiciones.model")(db);
const robot = new Robot(puntuajeModelo);

app.get("/", async (req, res) => { 
  const query = await puntuajeModelo.findOne().lean().exec();
  res.render("index", query);
});

app.listen(port, () => {
    console.log(`Server conectado en el puerto: ${port}`);
});

robot.schedule(robotmin);