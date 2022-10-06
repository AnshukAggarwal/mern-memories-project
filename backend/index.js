const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const memoriesRouter = require("./Routes/memories.routes");

const port = 5000;

const MONGODB_URL =
  "mongodb+srv://anshukaggarwal:anshukaggarwal123@cluster0.yhsgcyf.mongodb.net/?retryWrites=true&w=majority";

const app = express(); //initialize app

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //added to data sent via the post method from the front-end
app.use(cors());

app.use("/memories", memoriesRouter);

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", () => console.log("Connected to DB"));

app.listen(port, () => console.log(`Server running on port ${port}`));
