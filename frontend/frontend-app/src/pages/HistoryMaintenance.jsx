import PanelHistoryMaintenance from "../components/HistoryMaintenance/PanelHistoryMaintenance";
import MaintenanceMenu from "../components/MaintenanceMenu/MaintenanceMenu";
import SideMenu from "../components/SideMenu/SideMenu";
import PanelMaintenance from "./../components/LatestMaintenance/PanelMaintenance";


const HistoryMaintenance =()=>{
    return (
        <>
          <div className='container-gerente'>
            <SideMenu />
            {/* <div className='w-[60%] flex flex-col justify-between h-[100vh] items-center'> */}
            <div className='min-h-screen w-full md:w-[60%] py-3 px-5 flex column flex-col'>
              <PanelHistoryMaintenance />
            </div>
            <PanelMaintenance />
          </div>
        </>
    )
}
export default HistoryMaintenance;