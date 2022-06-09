import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation Mutation($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      commentCount
      likeCount
    }
  }
`;
export { CREATE_POST };
