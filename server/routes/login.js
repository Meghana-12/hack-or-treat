const express = require("express");
const router = express.Router();
const { models } = require("../db");

router.post("/", async (req, res) => {
  const result = await models.User.findAll({
    where: {
      username: req.body.username,
      password: req.body.password,
      email: req.body.password,
    },
  });

  if (result.length === 0) {
    res.send({
      message: "bad",
    });
  } else {
    res.send({
      message: "good",
    });
  }
});

module.exports = router;
