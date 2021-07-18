const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts', {
>>>>>>> develop
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
