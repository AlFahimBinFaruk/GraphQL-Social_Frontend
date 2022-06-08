import React, { useState, useContext, useEffect } from "react";

const AppAlertContext = React.createContext();
const AppAlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (showAlert) {
      const alertTimeOut = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(alertTimeOut);
    }
  }, [showAlert]);

  return (
    <AppAlertContext.Provider value={{ showAlert, setShowAlert }}>
      {children}
    </AppAlertContext.Provider>
  );
};
// make sure use
export const useGlobalAlertContext = () => {
  return useContext(AppAlertContext);
};

export { AppAlertContext, AppAlertProvider };