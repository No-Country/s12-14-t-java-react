import { useEffect, useState } from "react";
import CardVehicleNotWorking from "./CardVehicleNotWorking";
import { getInactiveVehicles } from "../../services/fetchService";

const PanelVehiclesNotWorking =()=>{

  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    getInactiveVehicles().then((response)=>{
      console.log("Response:");
      console.log(response.data);
      setVehicles(response.data);
    }
    )
  
  }, []);


    return (
        <section className="section-vehicles mt-[3rem]  w-[90%]  section-vehicles-nw shadow-custom">
        <div className="section-vehicles__container ">
          <h2 className="section-vehicles__title">
            Vehículos fuera de servicio
          </h2>
          <div className="cards-container">
            <div className="cards-carrusel cards-carrusel_nw">
            {vehicles!=null?vehicles.map((vehicle, index)=>
                       (<CardVehicleNotWorking vehicle={vehicle} key={index}/>)
                    ):<span class="loaderSpin"></span>}
            </div>

          </div>
        </div>
      </section>
    )
}
export default PanelVehiclesNotWorking;