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
import HistoryMaintenance from "../pages/HistoryMaintenance";
import DashBoardMantenimientoInicial from "../pages/DashboardMantenimientoInicial"
export const ManagerRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<DashboardVehicles />} />
      <Route path="/crear-perfil" element={<DashboardNewProfile />} />
      <Route path="/mostrar-empleados" element={<Empleado />} />
      <Route path="/agregar-vehiculo" element={<AddVehicle />} />
      {/* Ruta para historial de mantenimiento */}
      <Route path="/historial-mantenimiento" element={<HistoryMaintenance />} />
      <Route
        path="/registro-mantenimiento"
        element={<RegistroMantenimiento />}
      />
      <Route path="/mantenimiento-inicial" element={<DashBoardMantenimientoInicial/>} />
      <Route path="/eliminar-vehiculo" element={<EliminarVehiculo />} />

      {/* Ruta agregada para ultimos mantenimientos, dentro del panel de mantenimiento */}
      <Route path="/ultimos-mantenimientos" element={<LatestMaintenance />} />
      

      <Route path="/modificar-contrasena" element={<DashboardGerente />} />

      <Route path="/dashboard" element={<DashboardVehicles />} />
      <Route
        path="/dashboard-datos-personales"
        element={<DatosPersonalesChofer />}
      />
      <Route path="/panel-general-chofer" element={<PanelGeneral />} />
      <Route
        path="/modificar-contrasena-chofer"
        element={<ModificarChofer />}
      />

      <Route path="/RevisionDiaria" element={<RevisionDiaria />} />
    </Routes>
  );
};
