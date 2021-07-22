import { gql } from "@apollo/client";

// Confirm if its being used:
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Confirm if its being used:

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// CREATE POST
export const createPost = gql`
  mutation createPost(
    $firstName: String!
    $lastName: String!
    $note: String!
    $age: String!
    $city: String!
    $state: String!
    $phone: String!
  ) {
    createPost(
      firstName: $firstName
      lastName: $lastName
      note: $note
      age: $age
      city: $city
      state: $state
      phone: $phone
    ) {
      # do we need this?
      token
      user {
        _id
        username
      }
    }
  }
`;
