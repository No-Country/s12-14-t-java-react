import PanelMaintenance from "../components/LatestMaintenance/PanelMaintenance";
import MaintenanceMenu from "../components/MaintenanceMenu/MaintenanceMenu";
const LatestMaintenance=()=>{
    return (
        <>
            <MaintenanceMenu />
            
            <main className="flex flex-row justify-center items-center
            p-6" >
                <PanelMaintenance version={"seccion"} />
            </main>
        </>
    )
}
export default LatestMaintenance;