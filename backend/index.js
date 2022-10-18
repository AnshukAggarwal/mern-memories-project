const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const path = require("path");
const memoriesRouter = require("./Routes/memories.routes");

const port = process.env.PORT || 5000;

const MONGODB_URL = process.env.DBURL;

const app = express(); //initialize app

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //added to data sent via the post method from the front-end
app.use(cors());

app.use("/memories", memoriesRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.status(200).send("Welcome");
  });
}

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", () => console.log("Connected to DB"));

app.listen(port, () => console.log(`Server running on port ${port}`));
