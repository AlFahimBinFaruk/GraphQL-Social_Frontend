import { MDBBtn, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../mutations/userMutations";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useGlobalUserContext } from "../../contexts/userContext";
import { useGlobalAlertContext } from "../../contexts/alertContext";
import LoadingSpinner from "../../common_components/LoadingSpinner";

const Register = () => {
  let navigate = useNavigate();
  let { setUser } = useGlobalUserContext();
  let { setShowAlert } = useGlobalAlertContext();
  //form data
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  let { email, username, password } = formData;
  const [profilePic, setProfilePic] = useState("");
  const [profileURL, setProfileURL] = useState("");
  //handle change of input
  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const [registerUser, { loading }] = useMutation(REGISTER, {
    variables: { registerInput: { email, username, password, profileURL } },
    //returned value will be stored inside data then we will store it on result
    update(_, { data: result }) {
      localStorage.setItem("user", JSON.stringify(result.register));
      setUser(result.register);
      setShowAlert({ msg: "Register Successful", color: "success" });
      reset();
      navigate("/");
    },
    onError(err) {
      setShowAlert({
        msg: err.message,
        color: "danger",
      });
    },
  });

  //upload profilepic
  const uploadProfilePic = () => {
    if (profilePic.name) {
      const storage = getStorage();
      const storageRef = ref(storage, profilePic.name + new Date());
      const uploadTask = uploadBytesResumable(storageRef, profilePic);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProfileURL(downloadURL);
            setShowAlert({ msg: "Pic uploaded", color: "success" });
          });
        }
      );
    } else {
      setShowAlert({ msg: "Select a pic", color: "danger" });
    }
  };

  //handle submit
  const handleSubmit = () => {
    if (email && username && password && profileURL) {
      //we can only call it cannot provide any args
      registerUser();
    } else {
      setShowAlert({ msg: "Provide all info.", color: "danger" });
    }
  };

  //reset
  const reset = () => {
    setFormData({
      email: "",
      username: "",
      password: "",
    });
    setProfilePic("");
    setProfileURL("");
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <MDBCol size="12" xl="4">
        <h5 className="text-dark mb-4 text-center">Register to GraphSocial</h5>
        <div className="form">
          <MDBInput
            id="username"
            value={username}
            onChange={handleChange}
            className="mb-2"
            type="text"
            label="Username"
            size="sm"
          />
          <MDBInput
            id="email"
            value={email}
            onChange={handleChange}
            className="mb-2"
            type="email"
            label="Email address"
            size="sm"
          />
          <div className="profile-url mb-2">
            <h6 className="mb-0">
              <small>Profile Pic</small>
            </h6>
            <div className="d-flex align-items-baseline">
              <label class="form-label" for="profilePic">
                <small>
                  Selected Pic{" "}
                  {profilePic ? (
                    <span className="text-dark fw-bold">{profilePic.name}</span>
                  ) : (
                    <span role="button" className="fw-bold text-info mb-0">
                      Select
                    </span>
                  )}
                </small>
              </label>
              <input
                type="file"
                id="profilePic"
                className="d-none"
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
              <MDBBtn
                onClick={uploadProfilePic}
                size="sm"
                color="warning"
                className="ms-3"
                disabled={profileURL}
              >
                Upload
              </MDBBtn>
            </div>
          </div>
          <MDBInput
            id="password"
            value={password}
            onChange={handleChange}
            className="mb-2"
            type="password"
            label="Password"
            size="sm"
          />

          <MDBBtn type="submit" block size="sm" onClick={handleSubmit}>
            Register
          </MDBBtn>
        </div>
      </MDBCol>
    </div>
  );
};

export default Register;
