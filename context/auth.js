import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies, { set } from "js-cookie";
import axios from "axios";
import LogIn from "../pages/login";
import Loading from "../components/Loading";

const API = process.env.API_URL || "http://localhost:1337";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const Router = useRouter();

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  const handleCallback = async () => {
    const {
      data: { jwt },
    } = await axios.get(`${API}/auth/google/callback${window.location.search}`);

    if (jwt) {
      Cookies.set("token", jwt);

      const { data: user } = await axios.get(`${API}/users/me`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      setUser(user);
    }

    Router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        logout,
        handleCallback,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

const ProtectRoute = ({ children }) => {
  return children;
};

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const {
      user,
      setUser,
      loading,
      setLoading,
      handleCallback,
      isAuthenticated,
    } = useAuth();

    useEffect(async () => {
      const accessToken = Cookies.get("token");
      // if no accessToken was found,then we redirect to "/login" page.
      console.log(isAuthenticated);
      if (!accessToken) {
        Router.replace("/login");
      } else {
        // we call the api that verifies the token.
        const { data: user } = await axios.get(`${API}/users/me`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        // if token was verified we set the state.
        if (user) {
          setUser(user);
          setLoading(false);
        } else {
          // If the token was fraud we first remove it from localStorage and then redirect to "/"
          Cookies.remove("token");
          Router.replace("/login");
          setLoading(false);
        }
      }
    }, [isAuthenticated]);

    useEffect(() => {
      if (window.location.pathname === "/auth/google/callback") {
        handleCallback();
      }
    }, []);

    // if (loading) {
    //   return <Loading />;
    // }

    if (user) {
      return <WrappedComponent {...props} />;
    } else {
      return <LogIn />;
    }
  };
};

export default withAuth(ProtectRoute);
