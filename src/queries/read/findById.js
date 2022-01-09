import mongoose from "mongoose";
import User from "../../schemas/User";

mongoose.connect("mongodb://localhost/testdb5");
run();

async function run() {
  try {
    // this method returns the object that matches a specific id in a model
    const user = await User.findById("61daf33a8792c19a4d975619");
    console.log(user)
  }
  
  catch (e) {
    console.log(e.message);
  }
}
