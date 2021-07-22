// import { gql } from "@apollo/client";
import gql from 'graphql-tag';

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

// export const ADD_USER = gql`
// mutation{
//   register(registerInput:{
//     username: "1221"
//     password: "12345"
//     confirmPassword: "12345"
//     email: "1221@email.com"
//   }){
//     id
//     email
//     token
//     username
//   }
// }
// `;
// mutation{
//   register(registerInput:{
//     username: "4"
//     password: "12345"
//     confirmPassword: "12345"
//     email: "4@email.com"
//   }){
//     id
//     email
//     token
//     username
//   }
// }

// mutation RegisterMutation(  $username: String!,
//     $password: String!,
//     $confirmPassword: String!,
//     $email: String!) {
// register( username: $username,
//     password: $password,
//     confirmPassword: $confirmPassword,
//     email: $email
// ) {
//     id
//     email
//     token
//     username
//   }

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
