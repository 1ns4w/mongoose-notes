import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    // this method checks if there's any object that matches certain values in a model
    const user = await User.exists({ name: "Angel" });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
