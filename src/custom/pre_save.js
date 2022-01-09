import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    const user = await User.findOne({
      name: "Angel",
      email: "amejia.foo@gmail.com",
    });
    console.log(user);
    await user.save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
