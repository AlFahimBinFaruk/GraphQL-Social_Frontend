import { gql } from "@apollo/client";
const GET_POSTS = gql`
  query GetPosts($pageNo: String) {
    getPosts(pageNo: $pageNo) {
      posts {
        body
        likeCount
        commentCount
        createdAt
        id
        likes {
          id
          username
        }
        user {
          id
          username
          profileURL
        }
      }
      totalPostCount
    }
  }
`;

const GET_POST = gql`
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      comments {
        body
        username
        id
        createdAt
      }
      likes {
        username
        id
      }
      likeCount
      commentCount
      createdAt
      user {
        profileURL
        username
        id
      }
    }
  }
`;
export { GET_POSTS, GET_POST };
