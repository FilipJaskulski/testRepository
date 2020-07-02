const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router
  .route("/user")
  .get((req, res, next) => {
    User.find().then((users) => {
      return res.json(users);
    });
  })
  .post((req, res, next) => {
    console.log(req.body);
    const userData = {};
    User.findOne({ _id: req.body.id })
      .then((user) => {
        if (!user) {
          if (req.body.name) userData.name = req.body.name;
          if (req.body.age) userData.age = req.body.age;
          if (req.body.gender) userData.gender = req.body.gender;
          if (req.body.experience) userData.experience = req.body.experience;
          const newUser = new User(userData);
          newUser
            .save()
            .then((user) => {
              return res.json(user);
            })
            .catch((err) => console.log(err));
        } else {
          return res
            .status(400)
            .json({ error: "User for this user already exists" });
        }
      })
      .catch((err) => console.log(err));
  })
  .put((req, res, next) => {
    User.findByIdAndUpdate(req.body.id, { name: req.body.name })
      .then((user) => {
        if (user) {
          return res.json({ success: true });
        }
        return res.json({ success: false });
      })
      .catch((err) => console.log(err));
  })
  .delete((req, res, next) => {
    User.findByIdAndDelete(req.body.id)
      .then((user) => {
        if (user) {
          return res.json({ success: true });
        }
        return res.json({ success: false });
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
