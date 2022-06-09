import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useEffect } from "react";
import SingleCommentCard from "./components/SingleCommentCard";
import { useGlobalUserContext } from "../../contexts/userContext";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../queries/postQueries";
import HandleDeletePost from "../../utils/HandleDeletePost";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import moment from "moment";
import LikeBtn from "../../utils/LikeBtn";
import EnterComment from "../../utils/EnterComment";
const PostDetails = () => {
  let { id } = useParams();
  let { user } = useGlobalUserContext();
  const { loading, error, data, refetch } = useQuery(GET_POST, {
    variables: { postId: id },
  });
  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <h3>{error}</h3>;
  }
  return (
    <MDBCol size="12" xl="8" className="mx-auto post-deatails">
      {/* post info */}
      <MDBCard className="post-info shadow">
        <MDBCardBody>
          {/* delete btn */}
          {user?.id === data?.getPost.user?.id && (
            <HandleDeletePost postId={id} redirectToHome />
          )}
          {/* post-user-info */}
          <div className="post-user-info d-flex align-items-start">
            {/* profile pic */}
            <img
              src={data?.getPost?.user?.profileURL}
              alt=""
              width={40}
              height={40}
              className="rounded-circle me-2"
            />
            <div>
              {/* name */}
              <p className="mb-0 fw-bold text-muted">
                <small>{data?.getPost?.user?.username}</small>
              </p>
              {/* time */}
              <span>
                <small>
                  {moment(Number(data?.getPost?.createdAt)).fromNow(true)}
                </small>
              </span>
            </div>
          </div>
          {/* post info */}
          <h6 className="post-info text-dark mt-3">{data?.getPost?.body}</h6>
          {/* like comment manage btns */}
          <div className="d-flex justify-content-between mt-5">
            {/* like */}
            <div className="like text-center">
              {/* like btn */}
              <LikeBtn
                id={data?.getPost.id}
                likeCount={data?.getPost.likeCount}
                likes={data?.getPost.likes}
              />
            </div>
            {/* comment */}
            <div className="comment text-center">
              {/* comment count */}
              <p className="mb-1 fw-bold">
                <small>{data?.getPost.commentCount} comments</small>
              </p>
            </div>
          </div>
          {/* write a comment */}
          <div className="mt-4">
            {/* enter comment */}
            <EnterComment id={data?.getPost.id} />
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
          {data?.getPost?.comments.length > 0 ? (
            data?.getPost?.comments.map((i, index) => {
              return (
                <MDBCol size="12" key={index}>
                  <SingleCommentCard postId={data?.getPost.id} {...i} />
                </MDBCol>
              );
            })
          ) : (
            <p className="text-center text-danger fw-bold">No comments</p>
          )}
        </MDBRow>
      </div>
    </MDBCol>
  );
};

export default PostDetails;
