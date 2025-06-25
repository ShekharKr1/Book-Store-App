import React, { createContext, useContext, useState } from 'react';
//Context Api used
const AuthContext = createContext();

function AuthProvider({ children }) {
  const getlogedUser = () => {
    try {
      const userlogedinData = localStorage.getItem("user");
      return userlogedinData ? JSON.parse(userlogedinData) : undefined;
    } catch (err) {
      console.error("Failed to parse user from localStorage", err);
      return undefined;
    }
  };

  const [authuser, setAuthUser] = useState(getlogedUser());

  return (
    <AuthContext.Provider value={[authuser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export default AuthProvider;
export { AuthContext, useAuth };
