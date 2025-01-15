import { useState, createContext, useEffect } from "react";
import axios from "../configs/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [initialLoading, setInitialLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await axios.get("/auth/me");
      if (response.status === 200) {
        setAuthUser(response.data.user);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setAuthUser(null);
    }
  };

  useEffect(() => {
    if (getAccessToken()) {
      getUser();
    }
    setInitialLoading(false);
  }, []);

  const login = async (credential) => { 
    try {
      const res = await axios.post("/auth/login", credential);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);

    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const register = async (registerInputObj) => {
    const res = await axios.post("/auth/register", registerInputObj);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
    window.location.replace("/");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        authUser,
        register,
        logout,
        initialLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}