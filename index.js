require("dotenv").config();
require("./src/authentication/local.strategy");
require("./src/authentication/jwt.strategy");

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const locationsController = require("./src/locations/locations.controller");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const passport = require("passport");
const port = process.env.PORT || 3000;
const usersController = require("./src/users/users.controller");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Protect all /locations route with JWT Authentication
app.use(
  "/locations",
  passport.authenticate("jwt", { session: false }),
  locationsController
);
app.use("/users", usersController);

app.get("/", (req, res) => res.status(200).json({ message: "Hello World !" }));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to Mongo Database");
  app.listen(port, () => {
    console.log(
      `API listening on port ${port}, visit http://localhost:${port}/`
    );

  });
}

main();