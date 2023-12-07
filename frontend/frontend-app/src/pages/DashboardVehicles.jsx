import PanelVehiclesNotWorking from "../components/FleetVehicles/PanelVehiclesNotWorking";
import PanelVehiclesOnWorking from "../components/FleetVehicles/PanelVehiclesOnWorking";
import SideMenu from "../components/SideMenu/SideMenu";
import "./../styles/DashboardVehicles.css";
import Empleado from "../components/Empleado/Empleado";
const DashboardVehicles = () => {
  return (<>
      <div>
        <SideMenu />
        <main className="flex flex-col gap-4 justify-center items-center
        md:ml-[239px] lg:ml-[239px] 
        lg:mr-[380px] p-5">
        <PanelVehiclesOnWorking />
        <PanelVehiclesNotWorking />
        </main>
        <div className=" fixed right-0 top-0 md:invisible
        lg:visible h-[733px]">
            <Empleado />
        </div>
        
      </div>
  </>
    
  );
};
export default DashboardVehicles;
