import React from "react";
import { useState } from "react";

export const AUTHENTICATION_TOKEN = "loggedInToken";

interface AuthContextInterface {
  token: string | null;
  isLoggedIn: boolean;
  login: (token) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextInterface>({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const storedToken = localStorage.getItem(AUTHENTICATION_TOKEN);
  const [token, setToken] = useState(storedToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem(AUTHENTICATION_TOKEN, token); //to survive reload of browser
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem(AUTHENTICATION_TOKEN);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
