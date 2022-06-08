import { MDBBtn, MDBCard, MDBCardBody, MDBIcon } from "mdb-react-ui-kit";
import moment from "moment";
const SinglePostCard = ({
  id,
  body,
  user,
  likeCount,
  commentCount,
  createdAt,
}) => {
  return (
    <MDBCard className="h-100 shadow">
      <MDBCardBody>
        {/* delete btn */}
        <MDBIcon
          fas
          icon="trash"
          className="position-absolute top-0 end-0 p-4"
          role="button"
        />
        {/* post-user-info */}
        <div className="post-user-info d-flex align-items-start">
          {/* profile pic */}
          <img
            src={user?.profileURL}
            alt=""
            srcset=""
            width={40}
            height={40}
            className="rounded-circle me-2"
          />
          <div>
            {/* name */}
            <p className="mb-0 fw-bold text-muted">
              <small>{user?.username}</small>
            </p>
            {/* time */}
            <span>
              <small>{moment(Number(createdAt)).fromNow(true)}</small>
            </span>
          </div>
        </div>
        {/* post info */}
        <h6 className="post-info text-dark mt-3">{body}</h6>
        {/* like comment manage btns */}
        <div className="d-flex justify-content-between mt-5">
          {/* like */}
          <div className="like text-center">
            {/* like count */}
            <p className="mb-1 fw-bold">
              <small>{likeCount} Likes</small>
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
              <small>{commentCount} comments</small>
            </p>
            {/* manage comment btnmanage  */}
            <MDBBtn floating color="warning">
              <MDBIcon far icon="comments" />
            </MDBBtn>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SinglePostCard;
