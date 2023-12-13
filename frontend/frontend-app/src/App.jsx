import AddVehicle from "./pages/AddVehicle";
import DashboardAdmi from "./pages/DashboardAminis";
import { DashboardGerente } from "./pages/DashboardGerente";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Empleado from "./components/Empleado/Empleado";
import DashboardVehicles from "./pages/DashboardVehicles";
import { DashboardNewProfile } from "./pages/DashboardNewProfile";
import { RegistroMantenimiento } from "./pages/RegistroMantenimiento";
import DatosPersonalesChofer from "./components/DatosPersonalesChofer";
import ProtectedRoute from "./pages/ProtectedRoute";
import PanelGeneral from "./components/PanelGeneralChofer/PanelGeneral";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LatestMaintenance from "./pages/LatestMaintenance";
import RevisionDiaria from "./pages/RevisionDiaria";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    // if (!document.cookie.indexOf('token=') >= 0) {
    //   dispatch(user)
    // }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute isAllowed={false} />}>
            <Route
              path="/registro-mantenimiento"
              element={<RegistroMantenimiento />}
            />
          </Route>

          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Dashboard" element={<DashboardAdmi />} />
          <Route path="/AddVehicle" element={<AddVehicle />} />
          <Route path="/Empleado" element={<Empleado />} />
          <Route path="/NewProfile" element={<DashboardNewProfile />} />
          <Route path="/dashboard-v2" element={<DashboardGerente />} />
          <Route
            path="/dashboard-fleet-vehicles"
            element={<DashboardVehicles />}
          />
          <Route
            path="/dashboard-datos-personales"
            element={<DatosPersonalesChofer />}
          />
          <Route path="/panel-general-chofer" element={<PanelGeneral />} />
          <Route path="/RevisionDiaria" element={<RevisionDiaria />} />
          {/* Ruta agregada para ultimos mantenimientos, dentro del panel de mantenimiento */}
          <Route path="/latest-maintenance" element={<LatestMaintenance />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
