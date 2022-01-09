// import concepts from mongodb in mongoose: schema (data struct), model (object from the database), queries
import mongoose from "mongoose";
import User from "./schemas/User";

// even though mongoose ques up mongodb commands in case there's no connection, u can still make validations
mongoose.connect("mongodb://localhost/testdb5");

run();

async function run() {
  // we use a try block to ensure the script doesn't blow up if wrong field types are typed
  try {
    const user = await User.create({
      name: "Angel",
      age: 20,
      email: "amejia.foo@gmail.com",
      hobbies: ["Code", "Sleep"],
      address: {
        street: "Sauce Street",
        city: "Sauce City",
      },
    });

    // as save is an async function, you can use the then promise to do something after the user is saved
    await user.save();
  }
  
  catch (e) {
    console.log(e.message);
  }
}
