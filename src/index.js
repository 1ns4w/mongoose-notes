// import concepts from mongodb in mongoose: schema (data struct), model (object from the database), queries
import mongoose from "mongoose";
import User from "./schemas/User";

// even though mongoose ques up mongodb commands in case there's no connection, u can still make validations
mongoose.connect("mongodb://localhost/testdb5");

run();

async function run() {
  // as final users' input regarding an ODM can cause errors, we can use a try block
  try {
    // if we used the new User syntax we would have to do a user.save()
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

    // as mongoose is a ODM, you can treat models as objects in the context of POO to update fields
    user.name = "Inso";

    // as .save is already an async function, you can just use .then (promise) to ensure it was executed
    await user.save();
    
    console.log(user);
  }
  
  catch (e) {
    console.log(e.message);
  }
}
