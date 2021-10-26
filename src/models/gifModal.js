const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const GifSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: [true, "Please input an owner"],
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
    album: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: [true, "Please input a title"],
    },
    releaseYear: {
      type: String,
      default: "",
    },

    urlGif: {
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

const Gifs = mongoose.model("gifs", GifSchema);

module.exports = Gifs;
