<<<<<<< HEAD
const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Order = require('./Order');

module.exports = { User, Product, Category, Order };
=======
const postResolvers = require("./posts");
const userResolvers = require("./users");

module.exports = {
  Query: {
    ...postResolvers.Query,
  },
};
>>>>>>> develop
