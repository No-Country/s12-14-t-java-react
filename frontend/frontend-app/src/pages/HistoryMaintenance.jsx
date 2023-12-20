import PanelHistoryMaintenance from "../components/HistoryMaintenance/PanelHistoryMaintenance";
import MaintenanceMenu from "../components/MaintenanceMenu/MaintenanceMenu";
import PanelMaintenance from "./../components/LatestMaintenance/PanelMaintenance";


const HistoryMaintenance =()=>{
    return (
        <>
        <MaintenanceMenu />
        <div className=' bg-[white] min-h-screen
            flex column flex-col
            w-full mt-20 sm:w-full
            sm:mt-4 md:w-[55%]
            md:ml-60 
            lg:w-[80%] lg:ml-60 lg:p-8
            2xl:ml-60 2xl:w-[55%] py-3 px-5 
            '>
                <PanelHistoryMaintenance />
            </div>
            <div className="flex flex-row 
            justify-center items-center
             h-0 overflow-hidden 2xl:h-auto" >
                <PanelMaintenance version={"desktop"} />
            </div>
        
        </>
    )
}
export default HistoryMaintenance;