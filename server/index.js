const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./db");

/**
 * ---------- GENERAL SETUP ----------
 */

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
/**
 * ---------- ROUTES ----------
 */

app.use(routes);

/**
 * ---------- SERVER ----------
 */
const port = process.env.PORT || 5000;
db.sync().then((req) => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});
