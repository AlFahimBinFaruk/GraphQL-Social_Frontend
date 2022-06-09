import { MDBBtn, MDBCard, MDBCardBody, MDBIcon } from "mdb-react-ui-kit";
import moment from "moment";
import { useGlobalUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { useGlobalAlertContext } from "../contexts/alertContext";
import HandleDeletePost from "../utils/HandleDeletePost";
import LikeBtn from "../utils/LikeBtn";
const SinglePostCard = ({
  id,
  body,
  user,
  likes,
  likeCount,
  commentCount,
  createdAt,
}) => {
  let navigate = useNavigate();
  let { setShowAlert } = useGlobalAlertContext();
  // point user to loggedInUser as user is alredy there
  let { user: loggedInUser } = useGlobalUserContext();
  return (
    <MDBCard className="h-100 shadow">
      <MDBCardBody>
        {/* delete btn */}
        {user?.id === loggedInUser?.id && <HandleDeletePost postId={id} />}
        {/* post-user-info */}
        <div className="post-user-info d-flex align-items-start">
          {/* profile pic */}
          <img
            src={user?.profileURL}
            alt=""
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
        <h6
          className="post-info text-dark mt-3"
          onClick={() => navigate(`/${id}`)}
          role="button"
        >
          {body}
        </h6>
        {/* like comment manage btns */}
        <div className="d-flex justify-content-between mt-5">
          {/* like */}
          <div className="like text-center">
            {/* like btn */}
            <LikeBtn id={id} likeCount={likeCount} likes={likes} />
          </div>
          {/* comment */}
          <div className="comment text-center">
            {/* comment count */}
            <p className="mb-1 fw-bold">
              <small>{commentCount} comments</small>
            </p>
            {/* manage comment btnmanage  */}
            <MDBBtn floating color="warning" onClick={() => navigate(`/${id}`)}>
              <MDBIcon far icon="comments" />
            </MDBBtn>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SinglePostCard;
