const postResolvers = require("./posts");
const userResolvers = require("./users");

module.exports = {
  Query: {
    ...postResolvers.Query,
  },
};
// const User = require('./User');
// const Note = require('./Note');

module.exports = { User, Note };
