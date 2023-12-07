
import AddVehicle from "./pages/AddVehicle";
import DashboardAdmi from "./pages/DashboardAminis";
import { DashboardGerente } from "./pages/DashboardGerente";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Empleado from "./components/Empleado/Empleado";
import DashboardVehicles from './pages/DashboardVehicles'
import NewProfile from "./components/NewProfileEmployee/NewProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Dashboard' element={<DashboardAdmi />} />
          <Route path="/AddVehicle" element={<AddVehicle />} />
          <Route path="/Empleado" element={<Empleado />} />
          <Route path="/NewProfile" element={<NewProfile />} />
          <Route path='/dashboard-v2' element={<DashboardGerente />} />
          <Route path='/dashboard-fleet-vehicles' element={<DashboardVehicles />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
