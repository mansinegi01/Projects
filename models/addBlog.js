const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogModel",
    },
  },
  { timestamps: true }
);

const addBlog = mongoose.model("addBlog", userSchema);

module.exports = addBlog;
