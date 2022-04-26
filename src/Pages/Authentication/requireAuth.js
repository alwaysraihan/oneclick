import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
