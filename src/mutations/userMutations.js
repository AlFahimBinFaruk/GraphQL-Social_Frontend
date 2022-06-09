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
export { REGISTER };
