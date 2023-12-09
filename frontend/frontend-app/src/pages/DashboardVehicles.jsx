import PanelVehiclesNotWorking from "../components/FleetVehicles/PanelVehiclesNotWorking";
import PanelVehiclesOnWorking from "../components/FleetVehicles/PanelVehiclesOnWorking";
import SideMenu from "../components/SideMenu/SideMenu";
import "./../styles/DashboardVehicles.css";
import Empleado from "../components/Empleado/Empleado";
const DashboardVehicles = () => {
  return (
    <>
      <div className="container-gerente">
        <SideMenu />
        <div className="w-[60%] flex flex-col justify-between h-[100vh] items-center">
          <PanelVehiclesOnWorking />
          <PanelVehiclesNotWorking />
        </div>
        <Empleado />
      </div>
    </>
  );
};
export default DashboardVehicles;
