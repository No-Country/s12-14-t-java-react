import ModificarContrasena from "../components/ModificarContrasena/ModificarContrasena";
import SideMenu from "../components/SideMenu/SideMenu";
import Empleado from "../components/Empleado/Empleado";
import PanelVehiclesNotWorking from "../components/FleetVehicles/PanelVehiclesNotWorking";

export const DashboardGerente = () => {
  return (
    <div className="container-gerente"> 
      <SideMenu />
      <div className="w-[70%] flex flex-col justify-between items-center">
      <ModificarContrasena />
      <PanelVehiclesNotWorking />
      </div>

      <Empleado />
    </div>
  );
};
