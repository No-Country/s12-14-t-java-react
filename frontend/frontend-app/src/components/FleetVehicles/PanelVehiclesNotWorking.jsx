import CardVehicleNotWorking from "./CardVehicleNotWorking";

const PanelVehiclesNotWorking =()=>{

    return (
        <section className="section-vehicles mt-[3rem]  w-[90%]  section-vehicles-nw">
        <div className="section-vehicles__container ">
          <h2 className="section-vehicles__title">
            Vehículos fuera de servicio
          </h2>
          <div className="cards-container">
            <div className="cards-carrusel cards-carrusel_nw">
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