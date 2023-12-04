import { FaWifi, FaSignal, FaBus } from "react-icons/fa";
import { IoMdBatteryFull, IoIosNotificationsOutline, IoMdTime } from "react-icons/io";
import { BiErrorAlt } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";

function DashboardAdmi() {
    return (
        <section>
            <div className="flex justify-between px-5 py-5">
                <p>12:45</p>
                <ul className="flex">
                    <li><FaWifi   /></li>
                    <li><FaSignal /> </li>
                    <li><IoMdBatteryFull /></li>
                </ul>
            </div>

            <ul className="flex justify-around ">
                <li><FaBus size={20}/></li>
                <li><IoIosNotificationsOutline size={25}/></li>
                <li><MdMailOutline size={25}/></li>
            </ul>

            <h5 className="text-center mt-3">Jueves 16 de noviembre</h5>
            <p className="ml-3">Nombre.Conductor </p>
            <div>
                <select className="ml-3" name="" id="">
                    <option value="">Vehiculo XXX</option>
                </select>
            </div>
        <section className="flex items-center gap-8 mt-10">
            <div className="" >
                <h6>Inicio de horario laboral</h6>
                <IoMdTime size={60} />
            </div>
                <div>
                    <p>12:45 PM</p>
                    <p>Vehiculo xxx</p>
                </div>

          </section>

            <button className="text-center text-lg mt-5">Iniciar manteniemiento diario</button>

            <div className="flex gap-3 mt-3 ml-5">
                <h4>Identidad validada</h4>
                <input size={30} type="checkbox" className="checkbox-input" id="checkbox1" />

            </div>
            <div className="flex items-center gap-5 mt-10">
            <img src="././img/img-Das.png" alt="" />
            <div>
                 <h2>Nombre del empleado</h2>
                <p>turno matutino</p>
            </div>
            </div>
            <p>23/09 - 23/01</p>

            <p className="text-end mr-5 text-lg">Renovar carnet</p>

            <div className="mt-10 flex items-center flex-col">
            <BiErrorAlt className="" size={50}/>
           <h1>Finalizar reporte</h1>
            </div>

        </section>
    );
}

export default DashboardAdmi