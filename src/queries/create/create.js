import mongoose from "mongoose";
import User from "./schemas/User";

mongoose.connect("mongodb://localhost/testdb5");

run();

async function run() {
  try {
    // this method creates a document (instance of a model)
    const user = await User.create({
      name: "Angel",
      age: 24,
      email: "amejia.foo@gmail.com",
      hobbies: ["Code", "Sleep"],
      address: {
        street: "Calle 6 - Shangrila",
        city: "Lima",
      },
    });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
