import CardHistoryMaintenance from "./CardHistoryMaintenance";
import './HistorialMantenimiento.css';
const PanelHistoryMaintenance =()=>{
    

    return (
        
        <section className={`contorno 
        mt-20 w-95% flex flex-col gap-3 justify-center items-center py-7
        md:w-full md:flex md:flex-col md:gap-3 md:justify-center md:items-center md:mt-6
        `}>
            <div className="w-full
            flex flex-col justify-center items-center gap-8">
                <h1 className="text-[22px] font-bold text-center">Historial de Mantenimiento</h1>
                <h2 className="text-[18px] font-bold text-center">
                Vehículo: 
                <span className="ml-2 font-medium">{"vehiculo"}</span> </h2>

                <div className={`w-full flex flex-row flex-wrap gap-5 justify-center items-center
                 md:w-full md:flex md:flex-row md:gap-4 md:justify-center md:items-center md:flex-wrap md:p-7
                 }`}>
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 
                    <CardHistoryMaintenance /> 

                </div>
            </div>
        </section>
    
    )
}
export default PanelHistoryMaintenance;