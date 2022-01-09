import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    // virtuals are used to avoid duplicate data as u may only want to concatenate some data frequently
    const user = await User.findOne({ name: "Angel", email: "amejia.foo@gmail.com" });
    console.log(user.nameEmail);
  } catch (e) {
    console.log(e.message);
  }
}
