import React, { createContext, useState } from "react";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const login = () => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
  };

  return (
    <DataContext.Provider
      value={{
        isAuth,
        setAuth,
        login,
        logout
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
