<<<<<<< HEAD
// const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://andibuzzi:4oktPiuIaTXVyQc0@cluster0.xc54p.mongodb.net/tabs?retryWrites=true", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// module.exports = mongoose.connection;
=======
  
const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

// module.exports = mongoose.connection;

module.exports = {
  MONGODB:
    "mongodb+srv://andibuzzi:4oktPiuIaTXVyQc0@cluster0.xc54p.mongodb.net/tabs?retryWrites=true",
  SECRET_KEY: "some very secret key",
};
>>>>>>> 89e2d50aeffa6c5b0b4fc4b0825cb0e25eaa5831
