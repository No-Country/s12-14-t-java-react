import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation} from "react-router-dom";
import { ManagerRoutes } from "../router/ManagerRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import { AuthRoutes } from "./AuthRoutes";
import { useDispatch } from 'react-redux';


export const AppRouter = () => {
  const dispatch = useDispatch();

  const { status, checkAuthToken } = useAuthStore();
  const { pathname } = useLocation();
  const lastPath = pathname;

  // Guarda la última ruta visitada en el localStorage
  localStorage.setItem("lastPath", lastPath);

  useEffect(() => {
    checkAuthToken(dispatch);
  }, [dispatch]);

  return (
    <Routes>
      {status === "authenticated" ? (
        // Rutas protegidas para usuarios autenticados
        <Route path="/*" element={<ManagerRoutes />} />
      ) : (
        // Rutas de autenticación para usuarios no autenticados
        <Route path="/*" element={<AuthRoutes />} />
      )}

      {/* {status !== "authenticated" && (
        // Redirige al inicio de sesión si no está autenticado
        <Route path="/*" element={<Navigate to="auth/login" />} />
      )} */}
    </Routes>
  );
};