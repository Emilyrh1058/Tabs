const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");
const { signToken } = require('../../utils/auth');

const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../util/validators");
const { SECRET_KEY } = require("../../config");
const User = require("../../models/User");

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
}

module.exports = {
  Query: {
    async getUsers() {
      try {
        console.log("get users");
        const users = await User.find().sort({ createdAt: -1 });
        console.log(users);
        return users;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      const user = await User.findOne({ username });

      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Wrong crendetials";
        throw new UserInputError("Wrong crendetials", { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
        addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log("token", token)
      return { token, user };
    },
    // async register(
    //   _,
    //   { registerInput: { username, email, password, confirmPassword } }
    // ) {
    //   // Validate user data
    //   const { valid, errors } = validateRegisterInput(
    //     username,
    //     email,
    //     password,
    //     confirmPassword
    //   );
    //   if (!valid) {
    //     throw new UserInputError("Errors", { errors });
    //   }
    //   // TODO: Make sure user doesnt already exist
    //   const user = await User.findOne({ username });
    //   if (user) {
    //     throw new UserInputError("Username is taken", {
    //       errors: {
    //         username: "This username is taken",
    //       },
    //     });
    //   }
    //   // hash password and create an auth token
    //   password = await bcrypt.hash(password, 12);
    //   const date = new Date().toISOString();
    //   const token = generateToken({
    //     email,
    //     username,
    //     password,
    //     createdAt: date
    //   });
    //     console.log(date)
    //   const newUser = new User({
    //     email,
    //     username,
    //     password,
    //     createdAt: date,
    //     token
    //   });

    //   const res = await newUser.save();
    //     console.log(res)
    //   return {
    //     // ...res._doc,
    //     id: res._id,
    //     token,
    //     username: res.username,
    //     email: res.email
    //   };
    // },
  },
};
