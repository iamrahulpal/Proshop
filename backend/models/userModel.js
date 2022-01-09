// This page is for creating schemas and structuring the database by adding name email pass admin

import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    //created a schema for users
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//adding schema info to User bcoz we want to make models from this schema
const User = mongoose.model("User", userSchema);

export default User;
