import { Sidebar } from '../components/Sidebar/Sidebar'
import { SidebarEmpleado } from '../components/SidebarEmpleado/SidebarEmpleado'
import ModificarContrasena from '../components/ModificarContrasena/ModificarContrasena'
import SideMenu from '../components/SideMenu/SideMenu'
import Empleado from '../components/Empleado/Empleado'

export const DashboardGerente = () => {
  return (
    <div className='container-gerente'>
    <SideMenu />
  
      <ModificarContrasena />

      <Empleado />
    </div>
  )
}
