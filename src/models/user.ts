import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    username: {
      type: String,
      required: [true, "username is required"],
      minLength: [3, "username must be at least 3 characters"],
      maxLength: [20, "username must be at most 20 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);
export default User;