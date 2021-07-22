const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    firstName: String!
    lastName: String!
    note: String!
    age: String!
    city: String!
    state: String!
    phone: String!
    createdAt: String!
    username: String!
  }
  type User {
    _id: ID!
    username: String!
    email: String
    token: String
    createdAt: String
  }
  
    type Auth {
    token: ID!
    user: User
  }
  
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    # get a single post
    getPost(postId: ID!): Post
    getUsers: [User]
  }
  type Mutation {
     addUser(username: String!, email: String!, password: String!): Auth

    login(username: String!, password: String!): User!
    createPost(
      firstName: String!
      lastName: String!
      note: String!
      age: String!
      city: String!
      state: String!
      phone: String!
    ): Post!
    deletePost(postId: ID!): String!
  }
`;
