import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalUserContext } from "../contexts/userContext";

const RequireAuth = ({ children }) => {
  let { user } = useGlobalUserContext();
  let navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return children;
};

export default RequireAuth;
