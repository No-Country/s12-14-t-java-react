import  { useState, useEffect } from 'react';
import { BsShieldLockFill } from "react-icons/bs";
import {  FaUserPlus } from "react-icons/fa";
import { VscLayoutPanelRight } from "react-icons/vsc";
import { TbCar } from "react-icons/tb";
import { TbCarOff } from "react-icons/tb";
import { PiNotepad } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";


const SideMenu = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [ setIsMobile] = useState(false);

    const menuItems = [
        { name: 'Empresa', size: 'text-xl', spacing: 'mb-4', isClickable: false },
        { name: 'Nombre y apellido', icon: null, size: 'text-base', weight: 'font-light', spacing: 'mb-3', isClickable: false },
        { name: 'gerente@empresa.com', icon: null, size: 'text-base', spacing: 'mb-4', isClickable: false },
        { name: 'Modificar contraseña', icon: <BsShieldLockFill />, size: 'text-base', spacing: 'mb-10', isClickable: true },
        { name: 'Panel de control', icon: <VscLayoutPanelRight />, size: 'text-base', spacing: 'mb-2', isClickable: true },
        { name: 'Crear perfiles', icon: <FaUserPlus />, size: 'text-base', spacing: 'mb-2', isClickable: true },
        { name: 'Agregar vehículos', icon: <TbCar />, size: 'text-base', spacing: 'mb-2', isClickable: true },
        { name: 'Eliminar vehículos', icon: <TbCarOff />, size: 'text-base', spacing: 'mb-2', isClickable: true },
        { name: 'Registro mantenimiento', icon: <PiNotepad />, size: 'text-base', spacing: 'mb-20', isClickable: true },
        { name: 'Cerrar sesión', icon: <MdLogout />, size: 'text-base', spacing: 'mb-5', isClickable: true },
    ];

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 360);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="h-screen  query-menu  bg-[#31429B]  text-white font-poppins  left-0 top-0">
            <div className="flex flex-col  py-6">
                <h1 className="text-3xl font-semibold mb-16 leading-5 text-center">Trucking</h1>
                {menuItems.map((item, index) => (
                    
                    <Link 
                        to={item.Link}
                        key={index}
                        className={`${item.spacing} ${item.size} ${item.weight} ${item.isClickable ? 'cursor-pointer' : ''} flex items-center ${item.isClickable ? 'hover:bg-white hover:text-[#0D1544]' : ''} ${selectedItem === item.name ? 'bg-white text-[#0D1544]' : ''} leading-5 pl-7 ${item.height}`}
                        onClick={() => handleItemClick(item.name)}
                        style={{ minHeight: item.height ? '60px' : 'auto' }} // Asegurarse de que la altura mínima sea 60px para elementos clicables
                    >
                        {item.icon && <span className="inline-block mr-2">{item.icon}</span>}
                        {item.name}
                    </Link>
                  
                ))}
            </div>
        </div>
    );
};

export default SideMenu;
