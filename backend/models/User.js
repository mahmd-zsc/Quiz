let mongoose = require("mongoose");
let joi = require("joi");
let userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 14,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 14,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 20,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 30,
    },
    age: {
      type: Number,
      required: true,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePhoto: {
      type: Object,
      default: {
        url: null,
        publicId: null,
      },
    },
    quizzes_taken: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],
  },
  {
    timestamps: true,
  }
);

User = mongoose.model("User", userSchema);

let cerateUserValidation = (obj) => {
  let schema = joi.object({
    firstName: joi.string().required().trim().min(3).max(14),
    lastName: joi.string().required().trim().min(3).max(14),
    email: joi.string().required().trim().min(8).max(20),
    password: joi.string().required().trim().min(8).max(30),
    age: joi.number().required().trim(),
  });
  return schema.validate(obj);
};

module.exports = {
  User,
  cerateUserValidation,
};
