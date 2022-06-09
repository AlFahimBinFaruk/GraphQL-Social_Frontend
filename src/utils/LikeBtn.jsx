import { useMutation } from "@apollo/client";
import { LIKE_POST } from "../mutations/postMutations";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useGlobalUserContext } from "../contexts/userContext";

const LikeBtn = ({ id, likeCount, likes }) => {
  let { user } = useGlobalUserContext();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId: id },
  });
  return (
    <>
      {/* like count */}
      <p className="mb-1 fw-bold">
        <small>{likeCount} Likes</small>
      </p>
      {/* manage like btn */}
      <MDBBtn floating color={liked ? "success" : "black"} onClick={likePost}>
        <MDBIcon fas icon="thumbs-up" />
      </MDBBtn>
    </>
  );
};

export default LikeBtn;
