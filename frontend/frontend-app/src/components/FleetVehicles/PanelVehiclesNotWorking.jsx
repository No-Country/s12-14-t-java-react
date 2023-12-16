import CardVehicleNotWorking from "./CardVehicleNotWorking";

const PanelVehiclesNotWorking =()=>{
    return (
        <section className="section-vehicles mt-[3rem]  w-full lg:w-[90%]  section-vehicles-nw mb-4 lg:mb-0">
        <div className="section-vehicles__container ">
          <h2 className="section-vehicles__title">
            Vehículos fuera de servicio
          </h2>
          <div className="cards-container">
            <div className="cards-carrusel cards-carrusel_nw mt-4 lg:mt-0">
              <CardVehicleNotWorking />
              <CardVehicleNotWorking />
              <CardVehicleNotWorking />
              <CardVehicleNotWorking />
            </div>

          </div>
        </div>
      </section>
    )
}
export default PanelVehiclesNotWorking;