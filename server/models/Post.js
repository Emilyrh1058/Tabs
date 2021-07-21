const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  firstName: String,
  lastName: String,
  note: String,
  age: String,
  city: String,
  state: String,
  phone: String,
  username: String,
  createdAt: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Post", postSchema);
