import arrowRight from "/img/arrowRight.svg";

const CardMaintenance = (props)=>{
    return (
        <article className="
        cursor-pointer hover:bg-light-blue-200 
        rounded-lg overflow-hidden 
        w-[70%] min-w-[320px] sm:w-[50%] md:w-[50%] lg:w-[30%]
        2xl:w-[30%]">
        
            <header className="h-[40px] flex flex-row justify-center items-center
            text-[#2E4BDF] bg-[#F0F8FF] border-b border-[#2E4BDF]">
                <h2 className="text-[1.3rem] ">
                ID del Vehículo: {props.vehicle.id}
                </h2>
            </header>
            <div className="h-auto py-4 flex flex-row gap-2 justify-around items-center">
                <div>
                    <p className="text-[1.2rem]">Fecha: {props.vehicle.date}</p>
                    <p className="text-[1rem]">{props.vehicle.tipo}</p>
                    <span className="text-[0.9rem]">Costo: {props.vehicle.costo}</span>
                </div>
            </div>
            <footer>

            </footer>
        </article>
    )
}
export default CardMaintenance;