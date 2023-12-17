import Empleado from '../components/Empleado/Empleado'
import PanelVehiclesOnWorking from '../components/FleetVehicles/PanelVehiclesOnWorking'
import SideMenu from '../components/SideMenu/SideMenu'

PanelVehiclesOnWorking

export const EliminarVehiculo = () => {
  return (
    <div className='container-gerente'>
      <SideMenu />
      {/* <div className='w-[60%] flex flex-col justify-between h-[100vh] items-center'> */}
      <div className='min-h-screen w-full md:w-[60%] py-3 px-5 flex column flex-col'>
        <PanelVehiclesOnWorking />
      </div>
      <Empleado />
    </div>
  )
}
