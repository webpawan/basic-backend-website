const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 3,
  },

  password: {
    type: String,
    required: true,
    ValidityState(value) {
      if (!validator.isEmail(value)) {
        throw new Error("envalid email ");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    minLength: 10,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
