import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    // unlike find methods, the where method (object function) allows you to create your own queries using helper methods
    const user = await User.where("age")
      .gt(18)
      .lt(26)
      .where("name")
      .equals("Angel")
      .limit(1)
      .populate("bestFriend"); // this helper method joins the referenced user documents from the retrieved documents to them

    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
