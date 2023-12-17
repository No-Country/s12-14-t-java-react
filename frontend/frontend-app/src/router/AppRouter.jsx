import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { ManagerRoutes } from "../router/ManagerRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import { AuthRoutes } from "./AuthRoutes";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  const { pathname } = useLocation();
  const lastPath = pathname;
  localStorage.setItem("lastPath", lastPath);

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<ManagerRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="auth/login" />} />
    </Routes>
  );
};
