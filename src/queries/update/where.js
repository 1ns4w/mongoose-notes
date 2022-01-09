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
      .select("age")

    // this line of code sets a value to the bestFriend attribute from the first document in the returned array by the where method
    user[0].bestFriend = "61d8a1ff62f3d8191cd7fbd8";

    // this line of code loads the changes in the document (object or instance of a model) to the database
    await user[0].save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
