const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrainingSchema = new Schema({
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],

  coach: [
    {
      type: Schema.Types.ObjectId,
      ref: "coaches",
    },
  ],
  category: {
    type: String,
    enum: ["Personal Training", "Danceing", "Martial Arts"],
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Training = mongoose.model("trainings", TrainingSchema);
