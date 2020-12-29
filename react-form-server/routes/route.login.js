const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  console.log(`Username: ${req.body.name}, Password: ${req.body.password}`);
  res.status(200).send(`${req.body.name} has successfully logged in.`);
});

module.exports = router;
