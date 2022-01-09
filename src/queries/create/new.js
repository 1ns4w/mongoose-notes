import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");

run();

async function run() {
  try {
    // unlike the create method, you need to use the save method after you create this object using the new keyword
    const user = new User({
      name: "Angel",
      age: 20,
      email: "amejia.foo@gmail.com",
      hobbies: ["Code", "Sleep"],
      address: {
        street: "Sauce Street",
        city: "Sauce City",
      },
    });
    user.save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
