<<<<<<< HEAD
import { Sidebar } from '../components/Sidebar/Sidebar'
import { SidebarEmpleado } from '../components/SidebarEmpleado/SidebarEmpleado'


export const DashboardGerente = () => {
  return (
    <>
      {/* <Sidebar></Sidebar> */}

      {/* <SidebarEmpleado></SidebarEmpleado> */}
      
    </>
  )
}
=======
import ModificarContrasena from "../components/ModificarContrasena/ModificarContrasena";
import SideMenu from "../components/SideMenu/SideMenu";
import Empleado from "../components/Empleado/Empleado";
import PanelVehiclesNotWorking from "../components/FleetVehicles/PanelVehiclesNotWorking";

export const DashboardGerente = () => {
  return (
    <div className="container-gerente"> 
      <SideMenu />
      <div className="w-[60%] flex flex-col justify-between items-center">
      <ModificarContrasena />
      <PanelVehiclesNotWorking />
      </div>

      <Empleado />
    </div>
  );
};
>>>>>>> 965d60e89ed93d0bfbfea08f5785f51d0f388501
