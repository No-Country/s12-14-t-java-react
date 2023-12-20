import arrowRight from "/img/arrowRight.svg";

const CardHistoryMaintenance =(props)=>{
    return (
        <article className="borde-card
        cursor-pointer hover:bg-light-blue-200 
        rounded-lg overflow-hidden 
        w-[70%] min-w-[320px] sm:w-[50%] md:w-[50%] lg:w-[30%]
        2xl:w-[30%]">
        
            <header className=" h-[40px] flex flex-row 
            justify-center items-center
            ">
                <h2 className="text-[1.3rem] text-[#2E4BDF] font-medium">
                {props.mant.manType}
                </h2>
            </header>
            <div className="h-auto py-4 flex flex-row gap-2
             justify-around items-center">
                <div>
                    <p className="text-[0.9rem]"><b>Fecha: </b>{props.mant.date[2]}/{props.mant.date[1]}/{props.mant.date[0]}</p>
                    <span className="text-[0.9rem]"><b>Costo: </b>$ {props.mant.cost}</span>
                    <p className="text-[0.9rem]"><b>Descripcion: </b>{props.mant.description}</p>

                </div>
                {/* <img className="w-10 h-10
                 stroke-black" src={arrowRight} alt="flecha derecha" /> */}
            </div>
            <footer>

            </footer>
        </article>
    )
}
export default CardHistoryMaintenance;