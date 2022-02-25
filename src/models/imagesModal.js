const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ImagesSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      //   required: [true, "Please input an owner"],
      ref: "users",
    },

    totalLikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    author: {
      type: String,
      default: "",
    },

    title: {
      type: String,
      required: [true, "Please input a title"],
    },

    urlImage: {
      type: String,
      required: [true, "Please input a song URL"],
    },
    genre: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Images = mongoose.model("images", ImagesSchema);

module.exports = Images;
