const express = require("express");
const router = express.Router();
const Profile = require("../../models/Profile");

router
  .route("/client")
  .get((req, res, next) => {
    Profile.find()
      .populate("user", ["name", "age", "gender", "experience"])
      .then((profiles) => {
        return res.json(profiles);
      });
  })
  .post((req, res, next) => {
    console.log(req.body);
    const profileData = {};
    Profile.findOne({ _id: req.body.id })
      .then((profile) => {
        if (!profile) {
          if (req.body.email) profileData.email = req.body.email;
          if (req.body.isActive) profileData.isActive = req.body.isActive;
          console.log(profile);
          const newProfile = new Profile(profileData);
          newProfile
            .save()
            .then((profile) => {
              return res.json(profile);
            })
            .catch((err) => console.log(err));
        } else {
          return res
            .status(400)
            .json({ error: "Profile for this user already exists" });
        }
      });
  })
  .put((req, res, next) => {
    Profile.findByIdAndUpdate(
      req.body.id,
      { email: req.body.email } || { isActive: req.body.isActive }
    ).then((profile) => {
      if (profile) {
        return res.json({ success: true });
      }
      return res.json({ succes: false });
    });
  })
  .delete((req, res, next) => {
    Profile.findByIdAndDelete(req.body.id)
      .then((profile) => {
        if (profile) {
          return res.json({ succes: true });
        }
        return res.json({ succes: false });
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
