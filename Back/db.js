const mongoose = require("mongoose");

mongoose

.connect(process.env.MONGODB)
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.error("Could not connect to MongoDB..."));



module.exports = mongoose;
