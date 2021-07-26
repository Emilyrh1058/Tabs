const { AuthenticationError } = require('apollo-server-express');
const { User, Note } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('notes');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('notes');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('notes');
    },
    notes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Note.find(params).sort({ createdAt: -1 });
    },
    note: async (parent, { _id }) => {
      return Note.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args)
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addNote: async (parent, args, context) => {
      if (context.user) {
        const note = await Note.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { notes: note._id } },
          { new: true }
        );

        return note;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  }
}

module.exports = resolvers;
