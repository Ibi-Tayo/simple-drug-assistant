import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const PrivateRoutes = () => {
  let user = useContext(UserContext); // get user from usercontext provider // need to check if this works
  return user ? <Outlet /> : <Navigate to="/login" />; // if there is no user authenticated, direct them to login
};

export default PrivateRoutes;
