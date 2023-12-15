import CardMaintenance from "./CardMaintenance";
import './../../styles/LatestMaintenance.css';
const PanelMaintenance =()=>{
    return (
        <section className="mt-20 flex flex-col gap-3 justify-center items-center py-7 w-full
        md:w-full lg:ml-[240px] 2xl:h-[733px] 2xl:fixed 2xl:top-3 2xl:right-3
        2xl:w-[20%] 2xl:p-5 2xl:my-10 2xl:mx-10 2xl:w-min-[400px]">
            <div>
                <h1 className="text-[22px] font-bold text-center">Últimas revisiones</h1>
                <div className="h-auto sm:flex-col sm:gap-4 sm:justify-center sm:items-center
                 md:w-full md:flex md:flex-row md:justify-center md:items-center md:flex-wrap md:p-7
                2xl:w-full 2xl:h-[700px] 2xl:overflow-hidden 2xl:overflow-y-scroll 2xl:bg-scroll-[#969ec1] 
                custom-scroll">
                    <CardMaintenance /> 
                    <CardMaintenance />
                    <CardMaintenance />
                    <CardMaintenance />
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