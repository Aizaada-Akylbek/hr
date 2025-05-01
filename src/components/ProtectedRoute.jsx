import { useAuth } from "react-oidc-context";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const auth = useAuth();

  if (auth.isLoading) return <div>Loading...</div>;
  if (!auth.isAuthenticated) return <Navigate to="/" replace />;

  const role = auth.user?.profile?.role;

  if (role !== allowedRole) return <Navigate to="/" replace />;
  return children;
};
