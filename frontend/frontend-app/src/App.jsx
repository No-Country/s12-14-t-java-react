import AddVehicle from './pages/AddVehicle'
import { DashboardGerente } from './pages/DashboardGerente'
import { Homepage } from './pages/Homepage'
import { Login } from './pages/Login'
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
  console.log(isAllowed)

  useEffect(() => {
    if (document.cookie.indexOf('token=') >= 0) {
      const user = JSON.parse(window.localStorage.getItem('user'))
      console.log(user)
      dispatch(onLogin({ name: user.name }))
    } else {
      dispatch(onLogout())
    }
    // if (user.status === 'authenticated') {
    //   console.log([user, document.cookie.indexOf('token=')])
    // }
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
          </Route>

          <Route path='/' element={<Homepage />} />
          <Route path='/registro-mantenimiento' element={<RegistroMantenimiento />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/AddVehicle' element={<AddVehicle />} />
          <Route path='/Empleado' element={<Empleado />} />
          <Route path='/NewProfile' element={<DashboardNewProfile />} />

          {/* <Route path='/Dashboard' element={<DashboardAdmi />} /> */}
          <Route path='/modificar-contrasena' element={<DashboardGerente />} />

          <Route path='/dashboard' element={<DashboardVehicles />} />
          <Route path='/dashboard-datos-personales' element={<DatosPersonalesChofer />} />
          <Route path='/panel-general-chofer' element={<PanelGeneral />} />
          <Route path='/RevisionDiaria' element={<RevisionDiaria />} />
          {/* Ruta agregada para ultimos mantenimientos, dentro del panel de mantenimiento */}
          <Route path='/latest-maintenance' element={<LatestMaintenance />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
