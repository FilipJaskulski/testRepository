const express = require("express");
const router = express.Router();
const Coach = require("../../models/Coach");

router
  .route("/coach")
  .get((req, res, next) => {
    Coach.find().then((coaches) => {
      return res.json(coaches);
    });
  })
  .post((req, res, next) => {
    console.log(req.body);
    const coachData = {};
    if (req.body.name) coachData.name = req.body.name;
    if (req.body.age) coachData.age = req.body.age;
    if (req.body.sex) coachData.sex = req.body.sex;
    if (req.body.specialization) coachData.specialization = req.body.specialization;
    Coach.findOne({ _id: req.body.id }).then((coach) => {
      coach.name = req.body.name;
      coach.age = req.body.age;
      coach.sex = req.body.sex;
      coach.specialization = req.body.specialization;
      coach.save().then((coach) => {
        res.json(coach);
      });
    });
    const newCoach = new Coach(coachData);
    newCoach
      .save()
      .then((coach) => {
        res.json(coach);
      })
      .catch((err) => console.log(err));
  })
  .put((req, res, next) => {
    Coach.findByIdAndUpdate(req.body.id, { name: req.body.name })
      .then((coach) => {
        if (coach) {
          return res.json = ({ success: true });
        }
        return res.json = ({ success: false });
      })
      .catch((err) => console.log(err));
  })
  .delete((req, res, next) => {
    Coach.findByIdAndDelete(req.body.id)
      .then((coach) => {
        if (coach) {
          return res.json = ({ success: true });
        }
        return res.json = ({ success: false });
      })
      .catch((err) => console.log(err));
  });

  module.exports = router;