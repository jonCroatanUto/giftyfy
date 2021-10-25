const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    //   firebase_id: {
    //     type: String,
    //     unique: true,
    //   },
    active: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
    },
    username: {
      type: String,
      required: [true, "Please, give us your user name"],
    },
    email: {
      type: String,
      required: [true, "Please, give us your email"],
    },
    password: {
      type: String,
      required: [true, "we need a password"],
    },
    firstname: {
      type: String,
      default: "",
      required: [true, "Please, give us your first name"],
    },
    lastname: {
      type: String,
      default: "",
      required: [true, "Please, give us your last name"],
    },
    country: {
      type: String,
      default: "",
    },
    birthday: {
      type: Date,
      default: "",
    },
    myGifs: [
      {
        type: Schema.Types.ObjectId,
        ref: "gifs",
      },
    ],

    favTracks: [
      {
        type: Schema.Types.ObjectId,
        ref: "gifs",
      },
    ],

    myPlaylists: [
      {
        type: Schema.Types.ObjectId,
        ref: "gifList",
      },
    ],

    favPlaylists: [
      {
        type: Schema.Types.ObjectId,
        ref: "gifList",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],

    profileImg: {
      type: String,
      default: "",
    },

    // genres:[{
    //     type: Schema.Types.ObjectId,
    //     ref:"songs",
    // }],
  },
  {
    timestamps: true,
  }
);
UserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};
UserSchema.statics.comparePassword = async (plainPassword, encryptPassword) => {
  const pssExist = await bcrypt.compare(plainPassword, encryptPassword);

  return pssExist;
};
const Users = mongoose.model("users", UserSchema);

module.exports = Users;
