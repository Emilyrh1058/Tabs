const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Note {
  _id: ID
  noteText: String
  createdAt: String
  username: String
}
type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  notes: [Note]
  friends: [User]
}
type Query {
  me: User
  users: [User]
  user(username: String!): User
  notes(username: String): [Note]
  note(_id: ID!): Note
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addNote(noteText: String!): Note
  addReaction(noteId: ID!, reactionBody: String!): Note
  addFriend(friendId: ID!): User
}
type Auth {
  token: ID!
  user: User
}
`;

module.exports = typeDefs;
