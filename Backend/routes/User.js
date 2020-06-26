const router = require("express").Router();
let User = require("../models/user.js");

router.get("/user", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const newUser = new User({ username, password, email });
  newUser
    .save()
    .then(() => res.json("user signed up"))
    .catch((err) => res.status(400).json("Error" + err));
});


module.exports = router;
