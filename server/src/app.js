require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
// const entriesRouter = require("./routes/tokens.api.router");
// const exampleRouter = require('./routes/auth.api.router.js');
const mainRouter = require("./routes/api.router.js");
const authRouter = require("./routes/auth.api.router.js");

const app = express();
const { PORT } = process.env;
const corsConfig = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
// app.use("/api/v1.0/entries", entriesRouter);
// app.use("/api/v1.0/example", exampleRouter);
// руты на главную после всех роутов
app.use("/", mainRouter);
app.use("/auth", authRouter);

module.exports = app;
