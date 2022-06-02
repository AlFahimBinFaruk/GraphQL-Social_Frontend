import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useState } from "react";
import SinglePostCard from "../../../common_components/SinglePostCard";

const PostFeed = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 56, 4]);
  return (
    <div className="post-list">
      <h5 className="text-center">Posts Feed</h5>
      {/* list */}
      <MDBRow className="gy-4 my-2">
        {count.map((i, index) => {
          return (
            <MDBCol size="12" xl="6">
              <SinglePostCard />
            </MDBCol>
          );
        })}
      </MDBRow>
    </div>
  );
};

export default PostFeed;
