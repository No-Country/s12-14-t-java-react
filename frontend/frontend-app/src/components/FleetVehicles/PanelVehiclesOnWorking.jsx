import { useEffect, useState } from "react";
import CardVehicleOnWorking from "./CardVehicleOnWorking";
import { getActiveVehicles } from "../../services/fetchService";
import CardVehicleNotWorking from "./CardVehicleNotWorking";
const PanelVehiclesOnWorking =()=>{
  console.log(import.meta.env.VITE_API_URL)

  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    getActiveVehicles().then((response)=>{
      console.log("Response:");
      console.log(response.data);
      setVehicles(response.data);
    }
    )
  
  }, []);
  

return (<section className="section-vehicles section-vehicles-ow shadow-custom">
    <div className="section-vehicles__container">
    
      <h2 className="section-vehicles__title">Vehículos de la flota</h2>

      <div className="cards-container">
        <div className="cards-carrusel cards-carrusel_wo">
        {vehicles!=null?vehicles.map((vehicle, index)=>
                       (<CardVehicleOnWorking vehicle={vehicle} key={index}/>)
                    ):<span class="loaderSpin"></span>}
        </div>
      </div>
    </div>
  </section>)
}
export default PanelVehiclesOnWorking;