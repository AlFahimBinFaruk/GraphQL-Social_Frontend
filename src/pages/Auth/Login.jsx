import { MDBBtn, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../mutations/userMutations";
import { useGlobalUserContext } from "../../contexts/userContext";
import { useGlobalAlertContext } from "../../contexts/alertContext";
import LoadingSpinner from "../../common_components/LoadingSpinner";

const Login = () => {
  let navigate = useNavigate();
  let { setUser } = useGlobalUserContext();
  let { setShowAlert } = useGlobalAlertContext();
  //form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  let { username, password } = formData;
  //handle change of input
  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const [loginUser, { loading }] = useMutation(LOGIN, {
    variables: { username, password },
    //returned value will be stored inside data then we will store it on result
    update(_, { data: result }) {
      localStorage.setItem("user", JSON.stringify(result.login));
      setUser(result.login);
      setShowAlert({ msg: "Login Successful", color: "success" });
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
  //handle submit
  const handleSubmit = () => {
    if (username && password) {
      //we can only call it cannot provide any args
      loginUser();
    } else {
      setShowAlert({ msg: "Provide all info.", color: "danger" });
    }
  };

  //reset
  const reset = () => {
    setFormData({
      username: "",
      password: "",
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <MDBCol size="12" xl="4">
        <h5 className="text-dark mb-4 text-center">Login To get started.</h5>
        <div className="form">
          <MDBInput
            id="username"
            value={username}
            onChange={handleChange}
            className="mb-2"
            type="username"
            label="Username"
            size="sm"
          />
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
            Login
          </MDBBtn>
        </div>
      </MDBCol>
    </div>
  );
};

export default Login;
