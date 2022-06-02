import { MDBBtn, MDBCard, MDBCardBody, MDBIcon } from "mdb-react-ui-kit";

const SinglePostCard = () => {
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
          aspernatur ullam repellendus dolor iste consectetur. Fugit consequatur
          adipisci incidunt dolorem nulla? Ut ab sed dolores.
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
