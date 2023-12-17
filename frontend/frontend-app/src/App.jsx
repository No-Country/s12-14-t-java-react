import AddVehicle from './pages/AddVehicle'
import { DashboardGerente } from './pages/DashboardGerente'
import { Homepage } from './pages/Homepage'
import { Register } from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Empleado from './components/Empleado/Empleado'
import DashboardVehicles from './pages/DashboardVehicles'
import { DashboardNewProfile } from './pages/DashboardNewProfile'
import { RegistroMantenimiento } from './pages/RegistroMantenimiento'
import DatosPersonalesChofer from './components/DatosPersonalesChofer'
import ProtectedRoute from './pages/ProtectedRoute'
import PanelGeneral from './components/PanelGeneralChofer/PanelGeneral'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onLogin, onLogout } from './store/auth/authSlice'
import LatestMaintenance from './pages/LatestMaintenance'
import RevisionDiaria from './pages/RevisionDiaria'

function App() {
  const dispatch = useDispatch()
  const isAllowed = useSelector(state => state.auth.status)
  // console.log(typeof isAllowed)

  useEffect(() => {
    if (document.cookie.indexOf('token=') >= 0) {
      const user = JSON.parse(window.localStorage.getItem('user'))
      // console.log(user)
      // console.log()
      dispatch(onLogin(user))
    } else {
      document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      dispatch(onLogout())
    }
  }, [isAllowed])

  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
            <Route path='/mostrar-empleados' element={<Empleado />} />
            <Route path='/agregar-vehiculo' element={<AddVehicle />} />
            <Route path='/registro-mantenimiento' element={<RegistroMantenimiento />} />

            {/* Ruta agregada para ultimos mantenimientos, dentro del panel de mantenimiento */}
            <Route path='/latest-maintenance' element={<LatestMaintenance />} />
            <Route path='/modificar-contrasena' element={<DashboardGerente />} />

            <Route path='/dashboard' element={<DashboardVehicles />} />
            <Route path='/dashboard-datos-personales' element={<DatosPersonalesChofer />} />
            <Route path='/panel-general-chofer' element={<PanelGeneral />} />

            <Route path='/RevisionDiaria' element={<RevisionDiaria />} />
          </Route>

          <Route path='/' element={<Homepage />} />
          <Route path='/registro' element={<Register />} />
            <Route path='/crear-perfil' element={<DashboardNewProfile />} />

          {/* <Route path='/Dashboard' element={<DashboardAdmi />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
