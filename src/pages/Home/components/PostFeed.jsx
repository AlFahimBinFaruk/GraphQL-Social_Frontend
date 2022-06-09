import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit";
import SinglePostCard from "../../../common_components/SinglePostCard";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../../queries/postQueries";
import LoadingSpinner from "../../../common_components/LoadingSpinner";
import { useEffect, useState } from "react";

const PostFeed = () => {
  const [pageNo, setPageNo] = useState(1);
  const { loading, error, data, refetch } = useQuery(GET_POSTS, {
    variables: { pageNo: String(pageNo) },
  });
  useEffect(() => {
    refetch();
  }, [pageNo]);
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
            <MDBPaginationLink
              href="#"
              aria-label="Previous"
              onClick={() => setPageNo(pageNo - 1)}
            >
              <span aria-hidden="true">«</span>
            </MDBPaginationLink>
          </MDBPaginationItem>

          {[...Array(data?.getPosts?.totalPostCount)].map(
            (elementInArray, index) => (
              <MDBPaginationItem
                key={index}
                onClick={() => setPageNo(index + 1)}
              >
                <MDBPaginationLink href="#">{index + 1}</MDBPaginationLink>
              </MDBPaginationItem>
            )
          )}

          <MDBPaginationItem>
            <MDBPaginationLink
              href="#"
              aria-label="Next"
              onClick={() => setPageNo(pageNo + 1)}
            >
              <span aria-hidden="true">»</span>
            </MDBPaginationLink>
          </MDBPaginationItem>
        </ul>
      </nav>
    </div>
  );
};

export default PostFeed;
