const mongoose = require("mongoose");

mongoose
/* .connect("mongodb://127.0.0.1:27017/TablaDePosiciones") */ 
.connect(process.env.MONGODB)
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.error("Could not connect to MongoDB..."));



module.exports = mongoose;
