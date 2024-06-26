import { createContext, useCallback, useEffect, useState } from "react";
import { useHttpRequest } from "../hooks/fetchdata-hook";

export const AuthContext = createContext({
  isLoggedIn: false,
  user: {},
  allMyRecipes: [],
  onLogin: () => {},
  onLogout: () => {},
  sendAuthRequest: () => {},
  setAllMyRecipes: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoading, error, sendRequest } = useHttpRequest();
  const [user, setUser] = useState({});
  const [allMyRecipes, setAllMyRecipes] = useState([]);

  const loginHandler = (token, user) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    setUser(user);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const sendAuthRequest = useCallback((endPoint, body, headers, fn) => {
    sendRequest(
      import.meta.env.VITE_BACKEND_URL + `/api/v1/${endPoint}`,
      "POST",
      undefined,
      body,
      headers,
      (data) => {
        fn(data);
      }
    );
  }, []);

  const getCurentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/v1/auth/currentUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      getCurentUser();
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        sendAuthRequest,
        user,
        allMyRecipes,
        setAllMyRecipes,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
