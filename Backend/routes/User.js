const router = require("express").Router();
let User = require("../models/user.js");
const { uuid } = require("uuidv4");

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

router.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username, password })
    .then((user) => {
      if (!user) {
        return res
          .status(400)
          .json({ emailNotFound: "username or password is wrong" });
      } else {
        res.status(200).json({
          message: "user successfully signedin",
          token: "Bearer" + uuid(),
        });
      }
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
