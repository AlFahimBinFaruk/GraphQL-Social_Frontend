import {
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { CREATE_POST } from "../../../mutations/postMutations";
import { useMutation } from "@apollo/client";
import { useGlobalAlertContext } from "../../../contexts/alertContext";
import { useGlobalUserContext } from "../../../contexts/userContext";
import LoadingSpinner from "../../../common_components/LoadingSpinner";
const CreatePost = () => {
  let { setShowAlert } = useGlobalAlertContext();
  let { user } = useGlobalUserContext();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  //post body
  const [body, setBody] = useState("");
  //create post
  const [createPost, { loading }] = useMutation(CREATE_POST, {
    variables: { body },
    update() {
      reset();
      setBasicModal(false);
      setShowAlert({ msg: "Post added", color: "success" });
    },
    onError(err) {
      setShowAlert({
        msg: err.message,
        color: "danger",
      });
    },
  });

  //handle submit
  const handleSubmit = () => {
    if (body) {
      //we can only call it cannot provide any args
      createPost();
    } else {
      setShowAlert({ msg: "Provide all info.", color: "danger" });
    }
  };

  //reset
  const reset = () => {
    setBody("");
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="create-post">
      <div className="d-flex align-items-center">
        <p className="mb-0 me-3">Create a new post</p>
        {/* create post modal btn */}
        <MDBBtn floating onClick={toggleShow}>
          <MDBIcon fas icon="plus" />
        </MDBBtn>
      </div>
      {/* post form modal */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog centered>
          <MDBModalContent className="rounded-0">
            <MDBModalHeader>
              <MDBModalTitle>Create a new post</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {/* enter your post input */}
              <MDBTextArea
                label="Enter Your Post."
                rows={4}
                size="sm"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn block className="rounded-0" onClick={handleSubmit}>
                Post
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default CreatePost;
