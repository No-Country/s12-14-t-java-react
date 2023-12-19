import arrowRight from "/img/arrowRight.svg";

const CardMaintenance = ()=>{
    return (
        <article className="
        cursor-pointer hover:bg-light-blue-200 
        rounded-lg overflow-hidden 
        w-[70%] min-w-[320px] sm:w-[50%] md:w-[50%] lg:w-[30%]
        2xl:w-[95%]">
        
            <header className="h-[40px] flex flex-row justify-center items-center
            text-[#2E4BDF] bg-[#F0F8FF] border-b border-[#2E4BDF]">
                <h2 className="text-[1.3rem] ">
                ID del Vehículo: Camión
                </h2>
            </header>
            <div className="h-auto py-4 flex flex-row gap-2 justify-around items-center">
                <div>
                    <p className="text-[1.2rem]">Patente: ABC 123 DE</p>
                    <p className="text-[1rem]">Nombre del chofer</p>
                    <span className="text-[0.9rem]">29/11/2003</span>
                </div>
                <img className="w-10 h-10
                 stroke-black" src={arrowRight} alt="flecha derecha" />
            </div>
            <footer>

            </footer>
        </article>
    )
}
export default CardMaintenance;