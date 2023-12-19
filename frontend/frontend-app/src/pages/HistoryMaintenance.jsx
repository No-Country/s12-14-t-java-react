import PanelHistoryMaintenance from "../components/HistoryMaintenance/PanelHistoryMaintenance";
import PanelMaintenance from "../components/LatestMaintenance/PanelMaintenance";
import MaintenanceMenu from "../components/MaintenanceMenu/MaintenanceMenu";


const HistoryMaintenance =()=>{
    return (
        <>
        <MaintenanceMenu />
        <PanelHistoryMaintenance />
        <PanelMaintenance />
        </>
    )
}
export default HistoryMaintenance;