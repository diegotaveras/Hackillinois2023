const mongoose = require("mongoose");

const UserDetailsSchehma = new mongoose.Schema(
  {
    uname: String,
    email: String,
    phoneNo: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsSchehma);