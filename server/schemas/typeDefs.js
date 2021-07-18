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
  notes: [Note]
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
}
type Auth {
  token: ID!
  user: User
}
`;

module.exports = typeDefs;
