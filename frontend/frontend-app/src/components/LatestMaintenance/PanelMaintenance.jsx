import CardMaintenance from "./CardMaintenance";
import './LatestMaintenance.css';
const PanelMaintenance =(props)=>{
    const version=props.version;
    const estiloContenedor=(version)=>{
        return (version=="desktop")?
        (`2xl:h-[733px] 2xl:fixed 2xl:top-3 2xl:right-3 2xl:w-[25%] 2xl:p-5 2xl:my-10 2xl:mx-10 2xl:w-min-[400px]`):``;
    }
    const estiloHijo=(version)=>{
        return (version=="desktop")?
        (`2xl:w-full 2xl:h-[700px] 2xl:overflow-hidden 2xl:overflow-y-scroll 2xl:bg-scroll-[#969ec1] 
        custom-scroll`):`2xl:flex 2xl:flex-row 2xl:gap-4 2xl:justify-center 2xl:items-center 2xl:flex-wrap 2xl:p-7
        `;
    }
    console.log("version: ", version)

    
    return (
        <section className='flex flex-col lg:w-[25%] justify-start max-h-screen min-h-screen gap-5 py-3 pr-3 text-lg query-empleado'>
        <div className="py-3 px-4  rounded-[15px] w-full shadow-custom empleados
         w-full
            flex flex-col justify-center items-center">
                <h1 className="text-[22px] font-bold text-center">Últimas revisiones</h1>
                <div className={`w-full flex flex-row flex-wrap gap-5 justify-center items-center
                 md:w-full md:flex md:flex-row md:gap-4 md:justify-center md:items-center md:flex-wrap md:p-7
                 ${estiloHijo(version)}`}>
                    <CardMaintenance /> 
                    <CardMaintenance />
                    <CardMaintenance />
                    <CardMaintenance />
                </div>
            </div>
        </section>
    )
}
export default PanelMaintenance;