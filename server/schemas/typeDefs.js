<<<<<<< HEAD
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Card {
    _id: ID
    firstName: 'String',
    lastName: 'String',
    age: Int,
    city: 'String',
    state: 'String',
    phoneNumber: {
      type: Int,
      required: true,
      match: [^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$, 'Need Valid Phone Number']
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    notes: [
            {
                info: 'String'
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
=======
const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Thought {
  _id: ID
  thoughtText: String
  createdAt: String
  username: String
  reactionCount: Int
  reactions: [Reaction]
}
type Reaction {
  _id: ID
  reactionBody: String
  createdAt: String
  username: String
}
type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  thoughts: [Thought]
  friends: [User]
}
type Query {
  me: User
  users: [User]
  user(username: String!): User
  thoughts(username: String): [Thought]
  thought(_id: ID!): Thought
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addThought(thoughtText: String!): Thought
  addReaction(thoughtId: ID!, reactionBody: String!): Thought
  addFriend(friendId: ID!): User
}
type Auth {
  token: ID!
  user: User
}
>>>>>>> develop
`;

module.exports = typeDefs;
