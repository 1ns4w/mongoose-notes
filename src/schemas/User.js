import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  // although we can set all kinds of validations for our schema, they will only work for certain functions like create
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    // the validate attribute allows your own validations using JavaScript
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number.`,
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    minlength: 10,
  },
  createdAt: {
    type: Date,
    inmutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId, // this type indicates a reference to another document
    ref: "User", // this attribute indicates the model name of the referenced document
  },
  hobbies: [String],
  address: addressSchema, // you can also nest schemas into an attribute using brackets if it isn't complex
});

// custom methods
userSchema.methods.sayHi = function () {
  // arrow functions aren't allowed as the this keyword is used to reference a model instance
  // this method prints a greeting embedding the name attribute value of a document
  console.log(`Hi, my name is ${this.name}`);
};

// static methods
userSchema.statics.findByName = function (name) {
  // this method returns all the documents (objects or model instances) that match a certain name
  return this.where({ name: RegExp(name, "i") }); // where can also be treated as a find in certain contexts
};

// query helpers
userSchema.query.byName = function (name) {
  // this method returns all the documents (objects or model instances) that match a certain name
  return this.where({ name: RegExp(name, "i") });
};

// virtuals are functions that simulate documents attributes
userSchema.virtual("nameEmail").get(function () {
  // virtuals can be used to get or set (update) information
  // this virtual returns the name and the email of a user
  return `${this.name} <${this.email}>`;
});

// pre middleware allows you to trigger instructions before something happens
userSchema.pre("save", function (next) {
  // this middleware updates the updatedAt field from a document before it's saved
  this.updatedAt = Date.now();
  next(); // this continues the execution of the code stopped by the middleware
  // throw new Error("Fail Save") // you can also restrict save removing the next function and throwing an error
});

// post middleware allows you to trigger instructions after something happens
userSchema.post("save", function (doc, next) {
  // this middleware calls the sayHi method after a document is saved
  doc.sayHi();
  next();
});

// model function creates a model (class in ODM context) from a schema (structure in CS context)
module.exports = mongoose.model("User", userSchema);
