import { useEffect, useState } from "react";
import CardVehicleNotWorking from "./CardVehicleNotWorking";
import { getInactiveVehicles } from "../../services/fetchService";

const PanelVehiclesNotWorking =()=>{

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getInactiveVehicles().then((response)=>{
      console.log("Response:");
      console.log(response.data);
      setVehicles(response.data);
    }
    )
  
  }, []);


    return (
        <section className="section-vehicles mt-[3rem]  w-[90%]  section-vehicles-nw">
        <div className="section-vehicles__container ">
          <h2 className="section-vehicles__title">
            Vehículos fuera de servicio
          </h2>
          <div className="cards-container">
            <div className="cards-carrusel cards-carrusel_nw">
            {vehicles.map((vehicle, index)=>
                       (<CardVehicleNotWorking vehicle={vehicle} key={index}/>)
                    )}
            </div>

          </div>
        </div>
      </section>
    )
}
export default PanelVehiclesNotWorking;