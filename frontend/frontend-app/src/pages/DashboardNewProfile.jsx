import SideMenu from "../components/SideMenu/SideMenu";
import Empleado from "../components/Empleado/Empleado";
import PanelVehiclesNotWorking from "../components/FleetVehicles/PanelVehiclesNotWorking";
import NewProfile from "../components/NewProfileEmployee/NewProfile";

export const DashboardNewProfile = () => {
  return (
    <div className="container-gerente"> 
      <SideMenu />
      <div className='min-h-screen w-full md:w-[60%] py-3 px-5 flex column flex-col'>
      <NewProfile />
      <PanelVehiclesNotWorking />
      </div>

      <Empleado />
    </div>
  );
};
