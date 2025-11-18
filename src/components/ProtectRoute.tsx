import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps{
    children: ReactNode;
}

export const ProtectedRoutes = ({ children }: ProtectedRouteProps) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
