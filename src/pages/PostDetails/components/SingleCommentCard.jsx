import { MDBCard, MDBCardBody, MDBIcon } from "mdb-react-ui-kit";
import moment from "moment";
import { useGlobalUserContext } from "../../../contexts/userContext";
import { useMutation } from "@apollo/client";
import { DELETE_COMMENT } from "../../../mutations/postMutations";
import { useGlobalAlertContext } from "../../../contexts/alertContext";

const SingleCommentCard = ({ postId, id, body, username, createdAt }) => {
  let { user } = useGlobalUserContext();
  let { setShowAlert } = useGlobalAlertContext();
  //delete comment
  const [deleteComment] = useMutation(DELETE_COMMENT, {
    variables: { postId, commentId: id },
    update() {
      setShowAlert({ msg: "comment deleted", color: "warning" });
    },
    onError(err) {
      setShowAlert({
        msg: err.message,
        color: "danger",
      });
    },
  });
  return (
    <MDBCard className="h-100 shadow">
      <MDBCardBody>
        {/* delete btn */}
        {user.username === username && (
          <MDBIcon
            onClick={deleteComment}
            fas
            icon="trash"
            className="position-absolute top-0 end-0 p-4"
            role="button"
            size="sm"
          />
        )}
        {/* comment-user-info */}
        <div className="comment-user-info mb-2">
          {/* name */}
          <p className="mb-0 fw-bold text-muted">
            <small>{username}</small>
          </p>
          {/* time */}
          <span>
            <small> {moment(createdAt).fromNow(true)}</small>
          </span>
        </div>
        {/* comment */}
        <h6>{body}</h6>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleCommentCard;
