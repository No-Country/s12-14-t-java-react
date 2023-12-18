import { Routes, Route } from "react-router-dom";
import DashboardVehicles from "../pages/DashboardVehicles";
import { DashboardNewProfile } from "../pages/DashboardNewProfile";
import Empleado from "../components/Empleado/Empleado";
import AddVehicle from "../pages/AddVehicle";
import { RegistroMantenimiento } from "../pages/RegistroMantenimiento";
import { EliminarVehiculo } from "../pages/EliminarVehiculo";
import LatestMaintenance from "../pages/LatestMaintenance";
import { DashboardGerente } from "../pages/DashboardGerente";
import DatosPersonalesChofer from "../components/DatosPersonalesChofer";
import PanelGeneral from "../components/PanelGeneralChofer/PanelGeneral";
import ModificarChofer from "../components/ModificarContrasenaChofer/ModificarContrasenaChofer";
import RevisionDiaria from "../pages/RevisionDiaria";

export const ManagerRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<DashboardVehicles />} />
      <Route path="/crear-perfil" element={<DashboardNewProfile />} />
      <Route path="/mostrar-empleados" element={<Empleado />} />
      <Route path="/agregar-vehiculo" element={<AddVehicle />} />
      <Route
        path="/registro-mantenimiento"
        element={<RegistroMantenimiento />}
      />
      <Route path="/eliminar-vehiculo" element={<EliminarVehiculo />} />

      {/* Ruta agregada para ultimos mantenimientos, dentro del panel de mantenimiento */}
      <Route path="/latest-maintenance" element={<LatestMaintenance />} />
      <Route path="/modificar-contrasena" element={<DashboardGerente />} />

      <Route path="/dashboard" element={<DashboardVehicles />} />
    

      <Route path="/RevisionDiaria" element={<RevisionDiaria />} />
    </Routes>
  );
};
