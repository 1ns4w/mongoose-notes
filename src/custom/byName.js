import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    const user = await User.where("age").gt(18).byName("Angel");
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
