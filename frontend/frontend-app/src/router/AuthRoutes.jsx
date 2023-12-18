import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Register } from "../pages/Register";
import DatosPersonalesChofer from "../components/DatosPersonalesChofer";
import ModificarChofer from "../components/ModificarContrasenaChofer/ModificarContrasenaChofer";
import PanelGeneral from "../components/PanelGeneralChofer/PanelGeneral";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/registro" element={<Register />} />
    
    </Routes>
  );
};
