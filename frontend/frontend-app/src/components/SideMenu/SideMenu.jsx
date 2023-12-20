import { useState, useEffect } from 'react'
import { BsShieldLockFill } from 'react-icons/bs'
import { FaBars, FaUserPlus } from 'react-icons/fa'
import { VscLayoutPanelRight } from 'react-icons/vsc'
import { TbCar } from 'react-icons/tb'
import { TbCarOff } from 'react-icons/tb'
import { PiNotepad } from 'react-icons/pi'
import { MdLogout } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { onLogout } from '../../store/auth/authSlice'
import { PiListChecks } from "react-icons/pi";
import { CgList } from "react-icons/cg";
import { TbCalendarTime } from "react-icons/tb";


const SideMenu = () => {
  const dispatch = useDispatch()
  const [selectedItem, setSelectedItem] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const user = useSelector(state => state.auth.user)

  const [menuItems, setMenuItems] = useState([]);

  const handleLogout = () => {
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    dispatch(onLogout())
  }

  console.log(user)
    
  const menuItemsOwner = [
    {
      name: 'Panel de control',
      icon: <VscLayoutPanelRight />,
      size: 'text-base',
      spacing: 'mb-4',
      isClickable: true,
      link: '/dashboard'
    },
    {
      name: 'Crear perfiles',
      icon: <FaUserPlus />,
      size: 'text-base',
      spacing: 'mb-4',
      isClickable: true,
      link: '/crear-perfil'
    },
    {
      name: 'Agregar vehículos',
      icon: <TbCar />,
      size: 'text-base',
      spacing: 'mb-4',
      isClickable: true,
      link: '/agregar-vehiculo'
    },
    {
      name: 'Registro mantenimiento',
      icon: <PiNotepad />,
      size: 'text-base',
      spacing: 'mb-32',
      isClickable: true,
      link: '/registro-mantenimiento'
    },
  ]

    const menuItemsMaint = [
        { name: 'Panel de control', icon: <VscLayoutPanelRight />, size: 'text-base', spacing: 'mb-32', isClickable: true, link: '/mantenimiento-inicial'},
        // { name: 'Revisión diaria', icon: <PiListChecks />, size: 'text-base', spacing: 'mb-4', isClickable: true, link: '/RevisionDiaria'},
        { name: 'Registro mantenimiento', icon: <PiNotepad />, size: 'text-base', spacing: 'mb-4', isClickable: true, link: '/registro-mantenimiento-man'},
        { name: 'Historial mantenimiento', icon: <CgList />, size: 'text-base', spacing: 'mb-20', isClickable: true, link: '/historial-mantenimiento'},
    ];

const menuItemsDriver = [
    {
      name: 'Datos personales',
      icon: <PiNotepad />,
      size: 'text-base',
      spacing: 'mb-32',
      isClickable: true,
      link: '/dashboard-datos-personales'
    },
  ]


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user.role==="OWNER"){
      console.log("Menu owner")
      setMenuItems(menuItemsOwner)
    }
    if (user.role==="DRIVER"){
      console.log("Menu chofer")
      setMenuItems(menuItemsDriver)
    }
    if (user.role==="MAINTENANCE"){
        console.log("Menu mant")
        setMenuItems(menuItemsMaint)
      }
      const handleResize = () => {
      setIsMobile(window.innerWidth <= 360)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`text-white font-poppins lg:w-[20%] top-0 bg-[#31429B] h-100`}>
      {isMobile ? (
        <div className='flex items-center justify-end px-4 h-[61px]'>
          <button onClick={() => setIsMobile(!isMobile)}>
            <FaBars className='text-3xl' />
          </button>
        </div>
      ) : (
        <div className='flex flex-col py-6'>
          <p className='mb-16 text-3xl font-semibold leading-5 text-center'>Trucking</p>
          <ul>
            <li className='flex items-center text-xl'>
              <span className='block w-full py-2 px-7'>{user.companyName}</span>
            </li>
            <li className='flex items-center text-base'>
              <span className='block w-full py-2 px-7'>{user.name}</span>
            </li>
            <li className='flex items-center text-base'>
              <span className='block w-full py-2 px-7'>{user.email}</span>
            </li>
            <li className='flex items-center mb-10 text-base'>
              {/* mb-16 text-base undefined cursor-pointer flex items-center hover:bg-[#fff] hover:text-black  leading-5 pl-7 */}
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active bg-white text-black w-full' : 'w-full'
                }
                to='/modificar-contrasena'
              >
                <span className='flex items-center w-full py-2 px-7'>
                  <span className='inline-block mr-2 text-lg'>
                    <BsShieldLockFill />
                  </span>
                  Modificar contraseña
                </span>
              </NavLink>
            </li>
            {menuItems.map((item, index) => (
              <li className='flex items-center text-base' key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? 'active bg-white text-black w-full' : 'w-full'
                  }
                >
                  <span className='flex items-center w-full py-2 px-7'>
                    {item.icon && <span className='inline-block mr-2 text-lg'>{item.icon}</span>}
                    {item.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          <button onClick={handleLogout} className='mt-10 text-base'>
            <span className='flex items-center w-full py-2 px-7'>
              <span className='mr-2'>
                <MdLogout />
              </span>
              Cerrar sesión
            </span>
          </button>
        </div>
      )}
    </div>
  )
}

export default SideMenu
