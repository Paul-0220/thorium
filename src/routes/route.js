const express = require("express");
const router = express.Router();

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.get("/movies", function (req, res) {
  res.send(["hero", "coolie", "khan", "titanic"]);
});

router.get("/students/:id", function (req, res) {
  let x = req.params.id;
  res.send("Rahul");
});

router.get("/movies/:movieId", function (req, res) {
  let xe = ["hero", "titanic", "khan"];
  let value = req.params.movieId;
  if (value > xe.length - 1) {
    res.send("dosent exit");
  } else {
    res.send(xe[value]);
  }
});

module.exports = router;
