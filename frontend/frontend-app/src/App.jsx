import DashboardAdmi from './pages/DashboardAminis'
import { Homepage } from './pages/Homepage'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Dashboard' element={<DashboardAdmi />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
