import Empleado from '../components/Empleado/Empleado'
import SideMenu from '../components/SideMenu/SideMenu'
import { AddVehiculeBoard } from '../components/Vehiculos/AddVehiculeBoard'

const AddVehicle = () => {
  return (
    <div className='container-gerente'>
      <SideMenu />
      <AddVehiculeBoard />
      <Empleado />
    </div>
  )
}

export default AddVehicle
