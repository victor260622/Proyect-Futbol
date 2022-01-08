const mongoose = require("mongoose");
const app = require("./Back/express");
const scrap = require("./Back/scrapping");
const port = 8888;

mongoose
  .connect("mongodb://127.0.0.1:27017/TablaDePosiciones")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

const puntuajeModelo = require("./Back/posiciones.model")(mongoose);

app.get("/", async (req, res) => { 
  
  const data = new puntuajeModelo(await scrap());
  const saving = await data.save();
  console.log(saving);
  res.render("index", data);
});
  
    
    

app.listen(port, () => {
    console.log(`Server conectado en el puerto: ${port}`);
});