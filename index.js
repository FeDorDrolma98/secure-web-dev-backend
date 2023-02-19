require("dotenv").config();
require("./src/authentication/local.strategy");
require("./src/authentication/jwt.strategy");

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors"); //Le «  Cross-origin resource sharing » (CORS) ou « partage des ressources entre origines multiples » (en français, moins usité) est un mécanisme qui consiste à ajouter des en-têtes HTTP afin de permettre à un agent utilisateur d'accéder à des ressources d'un serveur situé sur une autre origine que le site courant. Un agent utilisateur réalise une requête HTTP multi-origine (cross-origin) lorsqu'il demande une ressource provenant d'un domaine, d'un protocole ou d'un port différent de ceux utilisés pour la page courante.
const locationsController = require("./src/locations/locations.controller");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);// pour permettre deployment?
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
    //console.log('JWT_SECRET:', process.env.JWT_SECRET);

  });
}

main();

// Essai pour démarer le front automatiquement => en fait faudra deployment pour ca ! sert a rien de m'acharner dessus rn !
/*
execSync('cd svelte', { stdio: 'inherit' });
execSync('npm run build', { stdio: 'inherit' });
execSync('npx svelte-kit run', { stdio: 'inherit' });
*/