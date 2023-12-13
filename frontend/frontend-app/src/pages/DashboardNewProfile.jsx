import SideMenu from "../components/SideMenu/SideMenu";
import Empleado from "../components/Empleado/Empleado";
import PanelVehiclesNotWorking from "../components/FleetVehicles/PanelVehiclesNotWorking";
import NewProfile from "../components/NewProfileEmployee/NewProfile";

export const DashboardNewProfile = () => {
  return (
    <div className="container-gerente"> 
      <SideMenu />
      <div className=" c-newprofile w-[60%] flex flex-col justify-between items-center">
      <NewProfile />
      <PanelVehiclesNotWorking />
      </div>

      <Empleado />
    </div>
  );
};
