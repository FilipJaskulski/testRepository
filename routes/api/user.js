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
    if (req.body.name) userData.name = req.body.name;
    if (req.body.age) userData.age = req.body.age;
    if(req.body.sex) userData.sex = req.body.sex;
    if(req.body.experience) userData.experience = req.body.experience;
    User.findOne({ _id: req.body.id }).then((user) => {
      user.name = req.body.name;
      user.age = req.body.age;
      user.sex = req.body.sex;
      user.experience = req.body.experience;
      user.save().then((user) => {
        res.json(user);
      });
    });
    const newUser = new User(userData);
    newUser
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => console.log(err));
  })
  .put((req, res, next) => {
    User.findByIdAndUpdate(req.body.id, {name: req.body.name})
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
