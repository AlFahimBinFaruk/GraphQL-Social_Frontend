import { MDBBtn, MDBCol, MDBInput } from "mdb-react-ui-kit";
const Register = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <MDBCol size="12" xl="4">
        <h5 className="text-dark mb-4 text-center">Register to GraphSocial</h5>
        <div className="form">
          <MDBInput className="mb-2" type="text" label="Username" size="sm" />
          <MDBInput
            className="mb-2"
            type="email"
            label="Email address"
            size="sm"
          />
          <div className="profile-url mb-2">
            <h6 className="mb-0"><small>Profile Pic</small></h6>
            <MDBInput type="file" size="sm"/>
          </div>
          <MDBInput
            className="mb-2"
            type="password"
            label="Password"
            size="sm"
          />

          <MDBBtn type="submit" block size="sm">
            Register
          </MDBBtn>
        </div>
      </MDBCol>
    </div>
  );
};

export default Register;
