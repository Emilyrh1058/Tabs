const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://andibuzzi:4oktPiuIaTXVyQc0@cluster0.xc54p.mongodb.net/tabs?retryWrites=true", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
