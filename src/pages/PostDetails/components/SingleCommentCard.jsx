import { MDBCard, MDBCardBody, MDBIcon } from "mdb-react-ui-kit";

const SingleCommentCard = () => {
  return (
    <MDBCard className="h-100 shadow">
      <MDBCardBody>
        {/* delete btn */}
        <MDBIcon
          fas
          icon="trash"
          className="position-absolute top-0 end-0 p-4"
          role="button"
          size="sm"
        />
        {/* comment-user-info */}
        <div className="comment-user-info mb-2">
          {/* name */}
          <p className="mb-0 fw-bold text-muted">
            <small>John Doe</small>
          </p>
          {/* time */}
          <span>
            <small>2 hours ago</small>
          </span>
        </div>
        {/* comment */}
        <h6>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non enim
          debitis sed!
        </h6>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SingleCommentCard;
