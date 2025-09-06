const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const {contect }= require("./controller/user.controller");


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/user.route");
app.use("/api/user", userRoutes);


require("dotenv").config();
const mongo_url = process.env.MONGO_URl;
app.set("port", process.env.PORT || 8000);

app.post("/contect", contect);

const start = async () => {
  const connectionDb = await mongoose.connect(process.env.MONGO_URL);
  console.log(`MONGO Connected DB HOst : ${connectionDb.connection.host}`);
};

start();

app.listen(3000, (req, res) => {
  console.log("app start");
});
