import PanelMaintenance from "../components/LatestMaintenance/PanelMaintenance";

const LatestMaintenance=()=>{
    return (
        <>
            <main className="w-96 h-[750px] rounded-2xl shadow-[0px_0px_4px_0px_rgba(108, 99, 255, 0.20)] overflow-hidden">
                <h1>Últimos mantenimientos</h1>
                <PanelMaintenance />
            </main>
        </>
    )
}
export default LatestMaintenance;