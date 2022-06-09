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
export { GET_POSTS };
