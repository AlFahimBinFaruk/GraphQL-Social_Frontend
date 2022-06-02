import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState } from "react";
import SingleCommentCard from "./components/SingleCommentCard";

const PostDetails = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 56, 4]);
  return (
    <MDBCol size="12" xl="8" className="mx-auto post-deatails">
      {/* post info */}
      <MDBCard className="post-info shadow">
        <MDBCardBody>
          {/* delete btn */}
          <MDBIcon
            fas
            icon="trash"
            className="position-absolute top-0 end-0 p-4"
            role="button"
            size="sm"
          />
          {/* post-user-info */}
          <div className="post-user-info d-flex align-items-start">
            {/* profile pic */}
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
              alt=""
              srcset=""
              width={40}
              height={40}
              className="rounded-circle me-2"
            />
            <div>
              {/* name */}
              <p className="mb-0 fw-bold text-muted">
                <small>John Doe</small>
              </p>
              {/* time */}
              <span>
                <small>2 hours ago</small>
              </span>
            </div>
          </div>
          {/* post info */}
          <h6 className="post-info text-dark mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            recusandae, totam dolorum non nihil nostrum cupiditate, perspiciatis
            aspernatur ullam repellendus dolor iste consectetur. Fugit
            consequatur adipisci incidunt dolorem nulla? Ut ab sed dolores.
          </h6>
          {/* like comment manage btns */}
          <div className="d-flex justify-content-between mt-5">
            {/* like */}
            <div className="like text-center">
              {/* like count */}
              <p className="mb-1 fw-bold">
                <small>6 Likes</small>
              </p>
              {/* manage like btn */}
              <MDBBtn floating color="black">
                <MDBIcon fas icon="thumbs-up" />
              </MDBBtn>
            </div>
            {/* comment */}
            <div className="comment text-center">
              {/* comment count */}
              <p className="mb-1 fw-bold">
                <small>0 comments</small>
              </p>
            </div>
          </div>
          {/* write a comment */}
          <div className="mt-4">
            <MDBRow>
              <MDBCol size="11">
                {/* comment input */}
                <MDBInput type="text" label="Write a comment" />
              </MDBCol>
              <MDBCol size="1">
                {/* comment send btn */}
                <MDBBtn floating>
                  <MDBIcon far icon="paper-plane" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBCardBody>
      </MDBCard>
      {/* comments of this post */}
      <div className="comments-of-this-post my-5">
        <p>
          <small>Comments of this post</small>
        </p>
        {/* comment list */}
        <MDBRow className="gy-4">
          {count.map((i, index) => {
            return (
              <MDBCol size="12">
                <SingleCommentCard />
              </MDBCol>
            );
          })}
        </MDBRow>
      </div>
    </MDBCol>
  );
};

export default PostDetails;
