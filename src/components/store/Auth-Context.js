import React, { useEffect, useState } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  const userIsLoggedIn = !!token;

  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    const initialEmail = localStorage.getItem("email");

    if (initialToken && initialEmail) {
      setToken(initialToken);
      setEmail(initialEmail);
    }
  }, []);

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  };
  const ContextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={ContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
