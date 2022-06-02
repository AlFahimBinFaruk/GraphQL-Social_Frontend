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

const CreatePost = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
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
              <MDBTextArea label="Enter Your Post." rows={4} size="sm" />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn block className="rounded-0">
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
