import React, { useState, useEffect } from 'react';
import { BsShieldLockFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { VscLayoutPanelRight } from "react-icons/vsc";
import { PiListChecks } from "react-icons/pi";
import { CgList } from "react-icons/cg";
import { PiNotepad } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";


const MaintenanceMenu = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    const menuItems = [
        { name: 'Empresa', size: 'text-xl', spacing: 'mb-4', isClickable: false },
        { name: 'Nombre y apellido', icon: null, size: 'text-base', weight: 'font-light', spacing: 'mb-3', isClickable: false },
        { name: 'gerente@empresa.com', icon: null, size: 'text-base', spacing: 'mb-4', isClickable: false },
        { name: 'Modificar contraseña', icon: <BsShieldLockFill />, size: 'text-base', spacing: 'mb-16', isClickable: true },
        { name: 'Panel de control', icon: <VscLayoutPanelRight />, size: 'text-base', spacing: 'mb-4', isClickable: true },
        { name: 'Revisión diaria', icon: <PiListChecks />, size: 'text-base', spacing: 'mb-4', isClickable: true },
        { name: 'Últimos mantenimientos', icon: <TbCalendarTime />, size: 'text-base', spacing: 'mb-4', isClickable: true },
        { name: 'Registro mantenimiento', icon: <PiNotepad />, size: 'text-base', spacing: 'mb-4', isClickable: true },
        { name: 'Historial mantenimiento', icon: <CgList />, size: 'text-base', spacing: 'mb-20', isClickable: true },
        { name: 'Cerrar sesión', icon: <MdLogout />, size: 'text-base', spacing: 'mb-5', isClickable: true },
    ];

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`text-white font-poppins fixed top-0 ${isMobile ? 'w-full bg-[#31429B] h-[61px]' : 'h-screen w-[239px] bg-[#31429B]'}`}>
            {isMobile ? (
                <div className="flex items-center justify-end px-4 h-[61px]">
                    <button onClick={() => setIsMobile(!isMobile)}>
                        <FaBars className="text-3xl" />
                    </button>
                </div>
            ) : (
                <div className="flex flex-col py-6">
                    <h1 className="text-3xl font-semibold mb-16 leading-5 text-center">Trucking</h1>
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.spacing} ${item.size} ${item.weight} ${item.isClickable ? 'cursor-pointer' : ''} flex items-center ${item.isClickable ? 'hover:bg-[#fff] hover:text-black' : ''} ${selectedItem === item.name ? 'bg-[#fff] text-black' : ''} leading-5 pl-7`}
                            onClick={() => handleItemClick(item.name)}
                            style={{ minHeight: '40px' }}
                        >
                            {item.icon && <span className="inline-block mr-2 text-lg">{item.icon}</span>}
                            {item.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MaintenanceMenu;
