import React, { useState, useEffect } from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { PiListChecks } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const DriverMenu = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [isMobile, setIsMobile] = useState(false);

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
      name: "Revisión diaria",
      icon: <PiListChecks />,
      size: "text-base",
      spacing: "mb-64",
      isClickable: true,
    },
    {
      name: "Cerrar sesión",
      icon: <MdLogout />,
      size: "text-base",
      spacing: "mb-5",
      isClickable: true,
    },
  ];

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 360);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`text-white font-poppins fixed top-0 ${
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
              to={
                item.name === "Revisión diaria"
                  ? "/panel-general-chofer"
                  : "/perfil-chofer"
              }
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
        </div>
      )}
    </div>
  );
};

export default DriverMenu;
