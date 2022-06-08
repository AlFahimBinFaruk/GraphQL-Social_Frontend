import { gql } from "@apollo/client";
const GET_POSTS = gql`
  query GetPosts($pageNo: String) {
  getPosts(pageNo: $pageNo) {
    posts {
      body
      user {
        id
        username
        profileURL
      }
      likeCount
      commentCount
      createdAt
      id
    }
    totalPostCount
  }
}
`;
export { GET_POSTS };
