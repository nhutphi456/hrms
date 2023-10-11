import { gql } from 'apollo-angular';

export const LOGIN = gql`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;
