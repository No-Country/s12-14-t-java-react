import CardVehicleOnWorking from "./CardVehicleOnWorking";
const PanelVehiclesOnWorking =()=>{
  console.log(import.meta.env.VITE_API_URL)
return (<section className="section-vehicles section-vehicles-ow">
    <div className="section-vehicles__container">
    
      <h2 className="section-vehicles__title">Vehículos de la flota</h2>

      <div className="cards-container">
        <div className="cards-carrusel cards-carrusel_wo">
            <CardVehicleOnWorking />
            <CardVehicleOnWorking />
            <CardVehicleOnWorking />
            <CardVehicleOnWorking />
            <CardVehicleOnWorking />
            <CardVehicleOnWorking />
            <CardVehicleOnWorking />
            <CardVehicleOnWorking />

        </div>
      </div>
    </div>
  </section>)
}
export default PanelVehiclesOnWorking;