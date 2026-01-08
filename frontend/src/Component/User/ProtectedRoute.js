import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("loggedUser");
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
