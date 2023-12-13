import { FaWifi, FaSignal, FaBus } from "react-icons/fa";
import { IoMdBatteryFull, IoIosNotificationsOutline, IoMdTime } from "react-icons/io";
import { BiErrorAlt } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import HoraEnTiempoReal from "../components/DashboardAdmiComp/Hora";
import FechaEnTiempoReal from "../components/DashboardAdmiComp/Fecha";
import Switch from "../components/DashboardAdmiComp/Switch";
import { useState } from 'react';

function DashboardAdmi() {

    const [opcionElegida, setOpcionElegida] = useState('Sin Vehiculo');

    return (
        <section>
            <div className="flex justify-between px-5 py-2">
                <HoraEnTiempoReal/>
                <ul className="flex">
                    <li><FaWifi   /></li>
                    <li><FaSignal /> </li>
                    <li><IoMdBatteryFull /></li>
                </ul>
            </div>

            <ul className="flex justify-around py-2 shadow bg-indigo text-blue">
                <li><FaBus size={20}/></li>
                <li><IoIosNotificationsOutline size={25}/></li>
                <li><MdMailOutline size={25}/></li>
            </ul>

            {/* <h5 className="mt-3 text-center">Jueves 16 de noviembre</h5> */}
            <p className="flex items-center justify-center font-sans text-blue"><FechaEnTiempoReal/></p>

            <p className="mt-3 font-sans font-bold ml-7 text-blue">Nombre.Conductor </p>

            <div>
                <select className="w-40 ml-6 text-sm text-white h-9 bg-blue rounded-2xl" name="" 
                id="opcionElegida" onChange={(e) => setOpcionElegida(e.target.value)}>
                    <option value="Sin Vehículo">Selecciona vehículo</option>
                    <option value="Vehículo 001">Vehiculo 001</option>
                    <option value="Vehículo 002">Vehiculo 002</option>
                    <option value="Vehículo 003">Vehiculo 003</option>
                    <option value="Vehículo 004">Vehiculo 004</option>
                    <option value="Vehículo 005">Vehiculo 005</option>
                    <option value="Vehículo 006">Vehiculo 006</option>
                    <option value="Vehículo 007">Vehiculo 007</option>
                </select>
            </div>

        <section className="grid w-11/12 mx-auto mt-4 text-white bg-purple rounded-2xl ">

            <div className="ml-10 text-lg font-bold">
                <h6 >Inicio de horario laboral</h6>
            </div>

            <div className="flex items-center pb-2 ml-8 gap-x-4" >
                <IoMdTime size={70} />
                <div>
                    {/* <p>12:45 PM</p> */}
                    <HoraEnTiempoReal className="font-black" />
                    <p className="items-center">{opcionElegida}</p>
                </div>
                    <div>
                        <div className="mt-10 ml-4" id="miElemento"><Switch/>
                        </div>
                    </div>
            </div>

        </section>

            <button className="w-11/12 p-2 mx-4 my-3 mt-5 text-xl text-center rounded-2xl bg-purple text-blue">Iniciar manteniemiento diario</button>

            <section className="w-11/12 mx-4 my-3 bg-indigo rounded-2xl text-blue" >
            <div className="flex gap-3 mt-3 ml-5">
                <h2 className="mt-4 font-bold" >Identidad validada</h2>
                <input size={30} type="checkbox" className="mt-4 checkbox-input" id="checkbox1" />
            </div>

            <div className="flex items-center gap-5 ml-4">
                <img src="././img/img-Das.png" alt="" />
                <div>
                    <h2 className="font-bold" >Nombre del empleado</h2>
                    <p>turno matutino</p>
                </div>
            </div>

            <p className="ml-4 text-xs" >23/09 - 23/01</p>

            <p className="mr-5 text-lg font-bold text-end">Renovar carnet</p>

            </section>

            <div className="flex flex-col items-center text-lg mt-96 text-blue ">
                <BiErrorAlt className="" size={50}/>
                <h1>Finalizar reporte</h1>
            </div>

        </section>
    );
}


export default DashboardAdmi;




