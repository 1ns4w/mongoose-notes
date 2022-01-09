import mongoose from "mongoose";
import User from "../../schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    // this method returns the object that matches a specific id in a model
    const user = await User.findById("61daf33a8792c19a4d975619");

    // this line of code accesses and updates the name value from the document above
    user.name = "Test"

    // this line of code loads the changes in the document (object or instance of a model) to the database
    user.save()

    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}