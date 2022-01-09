import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    // unlike find methods, the where method (object function) allows you to create your own queries using helper methods
    const user = await User.findOne({ name: "Angel" });
    user.sayHi();
  } catch (e) {
    console.log(e.message);
  }
}