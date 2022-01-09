import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    // this method returns any object that matches certain values in a model
    const user = await User.find({ name: "Angel" });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
