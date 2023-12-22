import PanelMaintenance from "../components/LatestMaintenance/PanelMaintenance";
import PanelVehiclesNotWorking from "../components/FleetVehicles/PanelVehiclesNotWorking";
import PanelVehiclesOnWorking from "../components/FleetVehicles/PanelVehiclesOnWorking";
import './../styles/DashboardVehicles.css'
import SideMenu from "../components/SideMenu/SideMenu";

const DashBoardMantenimientoInicial =()=>{
    return (
        <>
          <div className='container-gerente'>
            <SideMenu />
            {/* <div className='w-[60%] flex flex-col justify-between h-[100vh] items-center'> */}
            <div className='min-h-screen w-full md:w-[60%] py-3 px-5 flex column flex-col'>
              <PanelVehiclesOnWorking />
              <PanelVehiclesNotWorking />
            </div>
            <PanelMaintenance />
          </div>
        </>
      )
}
export default DashBoardMantenimientoInicial;