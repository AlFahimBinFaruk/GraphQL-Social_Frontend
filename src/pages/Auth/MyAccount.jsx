import { MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useGlobalAlertContext } from "../../contexts/alertContext";
import { useGlobalUserContext } from "../../contexts/userContext";
const MyAccount = () => {
  let navigate = useNavigate();
  let { user, setUser } = useGlobalUserContext();
  let { setShowAlert } = useGlobalAlertContext();
  //logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
    setShowAlert({ msg: "Logout successful", color: "warning" });
  };
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <MDBCol size="12" xl="4">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="text-dark">My Account</h5>
          {/* logout btn */}
          <MDBIcon
            fas
            icon="sign-out-alt"
            onClick={handleLogout}
            role="button"
          />
        </div>
        <div className="info mt-3">
          <img
            src={user.profileURL}
            alt="profile"
            width={100}
            height={100}
            className="rounded-circle mb-2"
          />
          <h6>Username:{user.username}</h6>
          <h6>Email:{user.email}</h6>
        </div>
      </MDBCol>
    </div>
  );
};

export default MyAccount;
