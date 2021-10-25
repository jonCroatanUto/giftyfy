const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const GifListSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title to the playlist"],
      trim: true,
      maxLength: [20, "Playlist title cannot exceed 20 characters"],
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      maxLength: [30, "Playlist description cannot exceed 30 characters"],
      default: "",
    },
    gifs: {
      type: [{ type: Schema.Types.ObjectId, ref: "gifs" }],
      default: [],
    },
    genre: {
      type: Array,
      message: "Please select a genre for the group",
      default: [],
    },
    private: {
      type: Boolean,
      required: [true, " Input group privacy mode"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: [true, "Please input an owner"],
      ref: "users",
    },
    playlistImage: {
      type: String,
      default: "",
    },
    totalLikes: [{ type: Schema.Types.ObjectId, ref: "users" }],
  },
  { timestamps: true }
);

const GifList = mongoose.model("gifList", GifListSchema);

module.exports = GifList;
