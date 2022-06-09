import { MDBBtn, MDBCol, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../mutations/postMutations";
import { useGlobalUserContext } from "../contexts/userContext";
import { useGlobalAlertContext } from "../contexts/alertContext";
import { useState } from "react";
const EnterComment = ({ id }) => {
  let { user } = useGlobalUserContext();
  let { setShowAlert } = useGlobalAlertContext();
  const [body, setBody] = useState("");
  const [createComment] = useMutation(CREATE_COMMENT, {
    variables: { postId: id, body },
    update() {
      setBody("");
      setShowAlert({ msg: "comment posted", color: "success" });
    },
    onError(err) {
      setShowAlert({
        msg: err.message,
        color: "danger",
      });
    },
  });

  //handle post comment
  const handlePostComment = () => {
    if (user) {
      if (body) {
        createComment();
      } else {
        setShowAlert({
          msg: "provide all info",
          color: "danger",
        });
      }
    } else {
      setShowAlert({
        msg: "Login to comment",
        color: "danger",
      });
    }
  };
  return (
    <MDBRow>
      <MDBCol size="11">
        {/* comment input */}
        <MDBInput
          type="text"
          label="Write a comment"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </MDBCol>
      <MDBCol size="1">
        {/* comment send btn */}
        <MDBBtn floating onClick={handlePostComment}>
          <MDBIcon far icon="paper-plane" />
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  );
};

export default EnterComment;
