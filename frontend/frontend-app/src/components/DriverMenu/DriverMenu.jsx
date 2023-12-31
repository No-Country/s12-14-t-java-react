import React, { useState, useEffect } from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { PiListChecks } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { onLogout } from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";

const DriverMenu = () => {
  const dispatch = useDispatch()
  const [selectedItem, setSelectedItem] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleLogout = () => {
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    dispatch(onLogout())
  }

  const menuItems = [
    { name: "Empresa", size: "text-xl", spacing: "mb-4", isClickable: false },
    {
      name: "Nombre y apellido",
      icon: null,
      size: "text-base",
      weight: "font-light",
      spacing: "mb-3",
      isClickable: false,
    },
    {
      name: "Modificar contraseña",
      icon: <BsShieldLockFill />,
      size: "text-base",
      spacing: "mb-28",
      isClickable: true,
    },
    {
      name: "Perfil",
      icon: <HiOutlineUser />,
      size: "text-base",
      spacing: "mb-4",
      isClickable: true,
    },
    {
      name: "Comenzar turno",
      icon: <PiListChecks />,
      size: "text-base",
      spacing: "mb-64",
      isClickable: true,
    },
  ];
  const routeMapping = {
    "Comenzar turno": "/panel-general-chofer",
    Perfil: "/dashboard-datos-personales",
    "Modificar contraseña": "/modificar-contrasena-chofer",
  };

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  useEffect(() => {

  setIsMobile(true)
    // const handleResize = () => {
    //   setIsMobile(window.innerWidth <= 500)
    // }

    // window.addEventListener("resize", handleResize);
    // handleResize()

    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`text-white font-poppins fixed z-50 top-0 ${
        isMobile
          ? "w-full bg-[#31429B] h-[61px]"
          : "h-screen w-[239px] bg-[#31429B]"
      }`}
    >
      {isMobile ? (
        <div className="flex items-center justify-end px-4 h-[61px]">
          <button onClick={() => setIsMobile(!isMobile)}>
            <FaBars className="text-3xl" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col py-6">
          <h1 className="text-3xl font-semibold mb-16 leading-5 text-center">
            Trucking
          </h1>
          {menuItems.map((item, index) => (
            <Link
            to={routeMapping[item.name] || ""}
              key={index}
              className={`${item.spacing} ${item.size} ${item.weight} ${
                item.isClickable ? "cursor-pointer" : ""
              } flex items-center ${
                item.isClickable ? "hover:bg-[#fff] hover:text-black" : ""
              } ${
                selectedItem === item.name ? "bg-[#fff] text-black" : ""
              } leading-5 pl-7`}
              onClick={() => handleItemClick(item.name)}
              style={{ minHeight: "40px" }}
            >
              {item.icon && (
                <span className="inline-block mr-2 text-lg">{item.icon}</span>
              )}
              {item.name}
            </Link>
          ))}
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
  );
};

export default DriverMenu