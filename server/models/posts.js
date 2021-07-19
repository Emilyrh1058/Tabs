const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  contact: [
    {
      firstName: String,
      lastName: String,
      note: String,
      age: Number,
      city: String,
      state: String,
      phoneNumber: String
    },
  ],
});

module.exports = model("Posts", postSchema);
