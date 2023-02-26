const mongoose = require("mongoose");

const UserDetailsSchehma = new mongoose.Schema(
  {
    uname: String,
    email: String,
    password: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsSchehma);