const express = require("express");
const router = express.Router();
const Training = require("../../models/Training");

router
  .route("/client")
  .get((req, res, next) => {
    Training.find()
      .populate(
        "user",
        ["name"],
        ["age"],
        ["sex"],
        ["experience"],
        "training",
        ["category"],
        ["isDone"]
      ) //czy to jest ok?
      .then((trainings) => {
        return res.json(trainings);
      });
  })
  .post((req, res, next) => {
    console.log(req.body);
    const trainingData = {};
    Training.findOne({ _id: req.body.id }).then((training) => {
      if (!training) {
        if (req.body.category) trainingData.category = req.body.category;
        if (req.body.isDone) trainingData.isDone = req.body.isDone;

        const newTraining = new Training(trainingData);
        newTraining
          .save()
          .then((training) => {
            return res.json(training);
          })
          .catch((err) => console.log(err));
      } else {
        return res
        .status(400)
        .json({ err: "Training already exists" });
      }
    });
  })
  .put((req, res, next) => {
    Training.findByIdAndUpdate(
      req.body.id,
      { category: req.body.category } || { isDone: req.body.isDone }
    ).then((training) => {
      if (training) {
        return res.json({ success: true });
      }
      return res.json({ success: false });
    });
  })
  .delete((req, res, next) => {
    Training.findByIdAndDelete(req.body.id)
      .then((training) => {
        if (training) {
          return res.json({ success: true });
        }
        return res.json({ success: false });
      })
      .catch((err) => console.log(err));
  });
module.exports = router;
