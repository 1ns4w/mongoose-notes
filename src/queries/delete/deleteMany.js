import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    // this method deletes all the objects that match certain values in a model
    const user = await User.deleteMany({ name: "Angel" });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
