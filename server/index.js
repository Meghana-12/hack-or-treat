const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const dotenv = require('dotenv');


/**
 * ---------- GENERAL SETUP ----------
 */

dotenv.config();

const app = express();
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
app.listen(port, () => console.log(`Listening on port ${port}`));