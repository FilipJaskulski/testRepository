const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoachSchema = new Schema({
  name: {
    type: String,
    minlength: [3, "too short"],
    maxlength: [15, "too long"],
    required: true,
  },
  age: {
    type: Number,
    min: [18, "too short"],
    max: [99, "too long"],
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  specialization: {
    type: String,
    enum: ["Personal Trainer", "Danceing", "Martial Arts"],
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Coach = mongoose.model("coaches", CoachSchema);
