import { Outlet, useNavigate } from 'react-router-dom'
import propTypes from 'prop-types'

// import { useEffect } from 'react'

const ProtectedRoute = ({ isAllowed, children }) => {
  // const logout = useGlobalStore(state => state.logout)
  const navigate = useNavigate()

  if (!isAllowed) {
    //   logout()
    navigate('/')
  }

  return children ? <>children</> : <Outlet />
}

ProtectedRoute.propTypes = {
  isAllowed: propTypes.bool.isRequired,
  children: propTypes.node
}

export default ProtectedRoute
