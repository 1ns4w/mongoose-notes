import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    const user = await User.findByName("Angel");
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
