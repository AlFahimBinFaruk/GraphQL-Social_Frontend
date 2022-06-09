import React, { useState, useContext, useEffect } from "react";

const UserAuthContext = React.createContext();
const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    setUser(userInfo ? userInfo : null);
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};
// make sure use
export const useGlobalUserContext = () => {
  return useContext(UserAuthContext);
};

export { UserAuthContext, UserAuthProvider };
