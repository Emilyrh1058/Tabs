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
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
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
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
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
