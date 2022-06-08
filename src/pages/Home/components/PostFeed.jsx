import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import {
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

import SinglePostCard from "../../../common_components/SinglePostCard";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../../queries/postQueries";
import LoadingSpinner from "../../../common_components/LoadingSpinner";

const PostFeed = () => {
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { pageNo: "1" },
  });
  
  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <h3>{error}</h3>;
  }
  return (
    <div className="post-list">
      <h5 className="text-center">Posts Feed</h5>
      {/* list */}
      <MDBRow className="gy-4 my-2">
        {data?.getPosts?.posts.length > 0 &&
          data.getPosts.posts.map((i, index) => {
            return (
              <MDBCol size="12" xl="6" key={index}>
                <SinglePostCard {...i} />
              </MDBCol>
            );
          })}
      </MDBRow>

      {/* <div ></div> */}
      <nav
        aria-label="Page navigation example "
        className="d-flex justify-content-center my-5"
      >
        <ul className="pagination mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </MDBPaginationLink>
          </MDBPaginationItem>

          {[...Array(data?.totalPostCount)].map((elementInArray, index) => (
            <MDBPaginationItem key={index}>
              <MDBPaginationLink href="#">{index + 1}</MDBPaginationLink>
            </MDBPaginationItem>
          ))}

          <MDBPaginationItem>
            <MDBPaginationLink href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </MDBPaginationLink>
          </MDBPaginationItem>
        </ul>
      </nav>
    </div>
  );
};

export default PostFeed;
