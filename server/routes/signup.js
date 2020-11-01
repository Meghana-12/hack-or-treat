const express = require("express");
const router = express.Router();
const { models } = require("../db");

router.post("/", async (req, res) => {
  models.User.create(req.body).catch((err) => {
    if (err) {
      console.log(err);
    }
  });

  res.send("register");
});

module.exports = router;
