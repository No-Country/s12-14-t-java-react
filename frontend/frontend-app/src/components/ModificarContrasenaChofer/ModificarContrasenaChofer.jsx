import DriverMenu from "../DriverMenu/DriverMenu";
import PanelVehiclesNotWorking from "../FleetVehicles/PanelVehiclesNotWorking";
import ModificarContrasena from "../ModificarContrasena/ModificarContrasena";


function ModificarChofer (){
    return(
      <>
      <DriverMenu />
        <section className="">
        <div className="mt-24 lg:w-9/12 ">
          <ModificarContrasena />
       <div className=" ml-20">
          <PanelVehiclesNotWorking />
          </div>
          </div>
          
      </section>
      </>
        
        
    )
}

export default ModificarChofer