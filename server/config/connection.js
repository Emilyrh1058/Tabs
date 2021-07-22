  
const mongoose = require('mongoose');

<<<<<<< HEAD
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });
=======
mongoose.connect("mongodb+srv://andibuzzi:4oktPiuIaTXVyQc0@cluster0.xc54p.mongodb.net/tabs?retryWrites=true", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
>>>>>>> 5c7793e4e0a77a46f1bfbe4fde4e781cf655a73a

// module.exports = mongoose.connection;

module.exports = {
  MONGODB:
    "mongodb+srv://andibuzzi:4oktPiuIaTXVyQc0@cluster0.xc54p.mongodb.net/tabs?retryWrites=true",
  SECRET_KEY: "some very secret key",
};