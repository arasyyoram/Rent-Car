import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = window.localStorage.getItem("token");
  const decoded = token ? jwt_decode(token) : {};
  const isLoggedIn = decoded.exp > Date.now() / 1000;

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
