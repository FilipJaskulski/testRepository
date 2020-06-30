const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        minlenth: [3, 'too short'],
        maxlength: [15, 'too long'],
        required: true
    },
    age: {
        type: Number,
        min: [18, 'too short'],
        max: [50, 'too long'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserSchema);