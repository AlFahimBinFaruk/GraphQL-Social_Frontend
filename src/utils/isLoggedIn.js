import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalUserContext } from "../contexts/userContext";

const IsLoggedIn = ({ children }) => {
  let { user } = useGlobalUserContext();
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return children;
};

export default IsLoggedIn;
