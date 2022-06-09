import { useMutation } from "@apollo/client";
import { MDBIcon } from "mdb-react-ui-kit";
import { useGlobalAlertContext } from "../contexts/alertContext";
import { DELETE_POST } from "../mutations/postMutations";
import { GET_POSTS } from "../queries/postQueries";
import LoadingSpinner from "../common_components/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const HandleDeletePost = ({ postId, redirectToHome = false }) => {
  let { setShowAlert } = useGlobalAlertContext();
  let navigate = useNavigate();
  //delete post
  const [deletePost, { loading }] = useMutation(DELETE_POST, {
    variables: { postId },
    update(proxy) {
      //read query
      const data = proxy.readQuery({
        query: GET_POSTS,
        variables: { pageNo: "1" },
      });
      //write query
      proxy.writeQuery({
        query: GET_POSTS,
        variables: { pageNo: "1" },
        data: {
          getPosts: {
            posts: data.getPosts.posts.filter((p) => p.id !== postId),
            totalPostCount: data.getPosts.totalPostCount,
            __typename: data.getPosts.__typename,
          },
        },
      });
      //show alert.
      setShowAlert({ msg: "Post deleted", color: "success" });
      //if redirect to home is true then redirect to home..
      if (redirectToHome) {
        navigate("/");
      }
    },
    onError(err) {
      setShowAlert({
        msg: err.message,
        color: "danger",
      });
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <MDBIcon
      fas
      icon="trash"
      className="position-absolute top-0 end-0 p-4"
      role="button"
      size="sm"
      onClick={() => deletePost()}
    />
  );
};
export default HandleDeletePost;
