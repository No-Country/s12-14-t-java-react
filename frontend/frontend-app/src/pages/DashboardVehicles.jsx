import PanelVehiclesNotWorking from "../components/FleetVehicles/PanelVehiclesNotWorking";
import PanelVehiclesOnWorking from "../components/FleetVehicles/PanelVehiclesOnWorking";
import "./../styles/DashboardVehicles.css";
const DashboardVehicles = () => {
  return (<>
      <div className="flex ">
        <div className="w-[239px] bg-blue h-screen"></div>
        <main className="flex flex-col gap-4 justify-center items-center p-4">
        <PanelVehiclesOnWorking />
        <PanelVehiclesNotWorking />
            </main>
      </div>
  </>
    
  );
};
export default DashboardVehicles;
