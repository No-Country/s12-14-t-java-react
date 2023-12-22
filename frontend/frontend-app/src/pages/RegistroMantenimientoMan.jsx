import Empleado from '../components/Empleado/Empleado'
import PanelMaintenance from '../components/LatestMaintenance/PanelMaintenance'
import MaintenanceMenu from '../components/MaintenanceMenu/MaintenanceMenu'
import { MantenimientoBoard } from '../components/Mantenimiento/MantenimientoBoard'
import SideMenu from '../components/SideMenu/SideMenu'

export const RegistroMantenimientoMan = () => {
  return (
    <div className='container-gerente'>
      <SideMenu />
      <MantenimientoBoard />
      <PanelMaintenance />
    </div>
  )
}
