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

const DELETE_POST = gql`
  mutation Mutation($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

const LIKE_POST = gql`
  mutation Mutation($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
      }
      likeCount
    }
  }
`;

const CREATE_COMMENT = gql`
  mutation Mutation($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      commentCount
      comments {
        id
      }
    }
  }
`;

const DELETE_COMMENT = gql`
  mutation Mutation($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      comments {
        id
      }
      commentCount
      id
    }
  }
`;
export { CREATE_POST, DELETE_POST, LIKE_POST, CREATE_COMMENT, DELETE_COMMENT };
