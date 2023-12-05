import { FaWifi, FaSignal, FaBus } from "react-icons/fa";
import { IoMdBatteryFull, IoIosNotificationsOutline, IoMdTime } from "react-icons/io";
import { BiErrorAlt } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import HoraEnTiempoReal from "../components/Hora";
import FechaEnTiempoReal from "../components/Fecha";
import Switch from "../components/Switch";
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

            <ul className="flex justify-around bg-indigo text-blue py-2 shadow">
                <li><FaBus size={20}/></li>
                <li><IoIosNotificationsOutline size={25}/></li>
                <li><MdMailOutline size={25}/></li>
            </ul>

            {/* <h5 className="text-center mt-3">Jueves 16 de noviembre</h5> */}
            <p className="flex justify-center items-center font-sans text-blue"><FechaEnTiempoReal/></p>

            <p className="ml-7 mt-3 text-blue font-bold font-sans">Nombre.Conductor </p>

            <div>
                <select className=" w-40 h-9 ml-6 bg-blue rounded-2xl text-white text-sm" name="" 
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

        <section className="bg-purple text-white grid mt-4 w-11/12 mx-auto rounded-2xl ">

            <div className="text-lg font-bold ml-10">
                <h6 >Inicio de horario laboral</h6>
            </div>

            <div className="flex gap-x-4 items-center pb-2 ml-8" >
                <IoMdTime size={70} />
                <div>
                    {/* <p>12:45 PM</p> */}
                    <HoraEnTiempoReal className="font-black" />
                    <p className="items-center">{opcionElegida}</p>
                </div>
                    <div>
                        <div className="ml-4 mt-10" id="miElemento"><Switch/>
                        </div>
                    </div>
            </div>

        </section>

            <button className=" w-11/12 mx-4 my-3 rounded-2xl text-center mt-5 bg-purple text-blue text-xl p-2">Iniciar manteniemiento diario</button>

            <section className=" bg-indigo w-11/12 mx-4 my-3 rounded-2xl text-blue" >
            <div className="flex gap-3 mt-3 ml-5">
                <h2 className="font-bold mt-4" >Identidad validada</h2>
                <input size={30} type="checkbox" className="checkbox-input mt-4" id="checkbox1" />
            </div>

            <div className="flex items-center gap-5 ml-4">
                <img src="././img/img-Das.png" alt="" />
                <div>
                    <h2 className="font-bold" >Nombre del empleado</h2>
                    <p>turno matutino</p>
                </div>
            </div>

            <p className="text-xs ml-4" >23/09 - 23/01</p>

            <p className="text-end mr-5 text-lg font-bold">Renovar carnet</p>

            </section>

            <div className="mt-96 text-lg flex items-center flex-col text-blue ">
                <BiErrorAlt className="" size={50}/>
                <h1>Finalizar reporte</h1>
            </div>

        </section>
    );
}


export default DashboardAdmi;




