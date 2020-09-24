import React, { createContext, useState, useEffect } from "react";
import { getToken } from "./endpoints";

const AuthContext = createContext({
  token: null,
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

    async function handleGetToken() {
    const accessInfo = await getToken();
    setToken(accessInfo.access_token);
  }

  useEffect(() => {
    console.log(process.env.REACT_ENV_TOKEN)
    handleGetToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;