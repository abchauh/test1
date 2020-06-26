const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("user", userSchema);

module.exports = User;
