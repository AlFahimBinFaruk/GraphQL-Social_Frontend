import { MDBBtn, MDBCol, MDBInput } from "mdb-react-ui-kit";
const Login = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <MDBCol size="12" xl="4">
        <h5 className="text-dark mb-4 text-center">Login To get started.</h5>
        <div className="form">
          <MDBInput
            className="mb-2"
            type="email"
            label="Email address"
            size="sm"
          />
          <MDBInput
            className="mb-2"
            type="password"
            label="Password"
            size="sm"
          />

          <MDBBtn type="submit" block size="sm">
            Login
          </MDBBtn>
        </div>
      </MDBCol>
    </div>
  );
};

export default Login;
