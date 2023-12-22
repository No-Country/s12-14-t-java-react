import { Navigate, Outlet } from 'react-router-dom'
import propTypes from 'prop-types'

// import { useEffect } from 'react'

const ProtectedRoute = ({ isAllowed, children }) => {
  // const logout = useGlobalStore(state => state.logout)

  if (isAllowed == 'not-authenticated') {
    return <Navigate to='/' />
  }

  return children ? <>children</> : <Outlet />
}

ProtectedRoute.propTypes = {
  isAllowed: propTypes.string.isRequired,
  children: propTypes.node
}

export default ProtectedRoute
