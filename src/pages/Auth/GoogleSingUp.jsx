import { MDBBtn, MDBCol ,MDBIcon} from "mdb-react-ui-kit";
const GoogleSingUp = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <MDBCol size="4" className="text-center">
        <h6 className="text-dark mb-2">Sign Up To get started.</h6>
        {/* sing up with google btn */}
        <MDBBtn>
          <span className="me-2">SignUp With Google</span>
          <MDBIcon fab icon="google" />
        </MDBBtn>
      </MDBCol>
    </div>
  );
};

export default GoogleSingUp;
