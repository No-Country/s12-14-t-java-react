import Empleado from '../components/Empleado/Empleado'
import { MantenimientoBoard } from '../components/Mantenimiento/MantenimientoBoard'
import SideMenu from '../components/SideMenu/SideMenu'

export const RegistroMantenimiento = () => {
  return (
    <div className='container-gerente'>
      <SideMenu />
      <MantenimientoBoard />
      <Empleado />
    </div>
  )
}
