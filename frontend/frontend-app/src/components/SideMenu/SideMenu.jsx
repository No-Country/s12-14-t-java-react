"use client";
import React, { useState } from 'react';
import { BsShieldLock } from "react-icons/bs";
import { LuPanelLeftOpen } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa6";
import { TbCar } from "react-icons/tb";
import { TbCarOff } from "react-icons/tb";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";

const SideMenu = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const menuItems = [
        { name: 'Empresa', icon: null, size: 'text-xl', spacing: 'mb-4', isClickable: false },
        { name: 'Nombre y apellido', icon: null, size: 'text-base', weight: 'font-light', spacing: 'mb-3', isClickable: false },
        { name: 'gerente@empresa.com', icon: null, size: 'text-base', spacing: 'mb-4', isClickable: false },
        { name: 'Modificar contraseña', icon: <BsShieldLock />, size: 'text-base', spacing: 'mb-10', isClickable: true, height: 'h-10' }, // 40px height
        { name: 'Panel de control', icon: <LuPanelLeftOpen />, size: 'text-base', spacing: 'mb-2', isClickable: true, height: 'h-15' }, // 60px height
        { name: 'Cerrar perfiles', icon: <FaUserPlus />, size: 'text-base', spacing: 'mb-2', isClickable: true, height: 'h-15' },
        { name: 'Agregar vehículos', icon: <TbCar />, size: 'text-base', spacing: 'mb-2', isClickable: true, height: 'h-15' },
        { name: 'Eliminar vehículos', icon: <TbCarOff />, size: 'text-base', spacing: 'mb-2', isClickable: true, height: 'h-15' },
        { name: 'Registro mantenimiento', icon: <LiaNotesMedicalSolid />, size: 'text-base', spacing: 'mb-20', isClickable: true, height: 'h-15' },
        { name: 'Cerrar sesión', icon: <IoIosLogOut />, size: 'text-sm', spacing: 'mb-5', isClickable: true, height: 'h-10' },
    ];

    const handleItemClick = (itemName) => {
        if (menuItems.find(item => item.name === itemName).isClickable) {
            setSelectedItem(itemName);
        }
    };

    return (
        <div className="h-screen w-[239px] bg-[#31429B] text-white font-poppins fixed left-0 top-0">
            <div className="flex flex-col py-6">
                <h1 className="text-3xl font-semibold mb-16 leading-5 text-center">Trucking</h1>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`${item.spacing} ${item.size} ${item.weight} ${item.isClickable ? 'cursor-pointer' : ''} flex items-center ${item.isClickable ? 'hover:bg-white hover:text-[#0D1544]' : ''} ${selectedItem === item.name ? 'bg-white text-[#0D1544]' : ''} leading-5 pl-7 ${item.height}`}
                        onClick={() => handleItemClick(item.name)}
                        style={{ minHeight: item.height ? '60px' : 'auto' }} // Asegurarse de que la altura mínima sea 60px para elementos clicables
                    >
                        {item.icon && <span className="inline-block mr-2">{item.icon}</span>}
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideMenu;
