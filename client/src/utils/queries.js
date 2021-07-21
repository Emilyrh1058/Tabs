import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      firstName
      lastName
      note
      age
      city
      state
      phone
      createdAt
      username
    }
  }
`;

export const QUERY_POST = gql`
  {
    getPost {
      id
    }
  }
`;
