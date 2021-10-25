// imports
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");
// const { config } = require("./config");
// routes
const { gifRouter, userRouter, gifListRouter } = require("./routes");

// app creationgifRouter

const app = express();
// console.log(config.url.client);
// app usage of imports
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(cors());

// app used routes
app.use("/gifs", gifRouter);
app.use("/users", userRouter);
app.use("/gifList", gifListRouter);

// test request to see server works properly
app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-world",
  });
});

module.exports = app;
