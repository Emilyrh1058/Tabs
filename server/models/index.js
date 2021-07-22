const postResolvers = require("../graphql/resolvers/posts");
const userResolvers = require("../graphql/resolvers/users");

module.exports = {
  Query: {
    ...postResolvers.Query,
  },
};
const User = require('./User');
const Note = require('./Note');

module.exports = { User, Note };
