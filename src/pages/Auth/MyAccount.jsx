import { MDBCol, MDBIcon } from "mdb-react-ui-kit";

const MyAccount = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <MDBCol size="12" xl="4">
        <div className="d-flex justify-content-between align-items-center">
        <h5 className="text-dark">My Account</h5>
        <MDBIcon fas icon="sign-out-alt" />
        </div>
        <div className="info">
          <img src="" alt="" srcset="" />
          <h6>Username:Fahim</h6>
          <h6>Email:fahim@gmail.com</h6>
        </div>
      </MDBCol>
    </div>
  );
};

export default MyAccount;
