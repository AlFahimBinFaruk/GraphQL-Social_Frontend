import { gql } from "@apollo/client";

const REGISTER = gql`
  mutation Mutation($registerInput: RegisterInput) {
    register(registerInput: $registerInput) {
      token
      profileURL
      username
      email
      id
    }
  }
`;

const LOGIN = gql`
  mutation Mutation($password: String!, $username: String!) {
    login(password: $password, username: $username) {
      profileURL
      username
      token
      email
      id
    }
  }
`;
export { REGISTER, LOGIN };
