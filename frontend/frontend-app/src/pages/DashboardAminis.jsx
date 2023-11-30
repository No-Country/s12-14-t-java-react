import { FaWifi, FaSignal, FaBus } from "react-icons/fa";
import { IoMdBatteryFull, IoIosNotificationsOutline, IoMdTime } from "react-icons/io";
import { BiErrorAlt } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import HoraEnTiempoReal from "../components/Hora";
import FechaEnTiempoReal from "../components/Fecha";
import Switch from "../components/Switch";

function DashboardAdmi() {
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

            <ul className="flex justify-around bg-purple text-blue py-2 shadow">
                <li><FaBus size={20}/></li>
                <li><IoIosNotificationsOutline size={25}/></li>
                <li><MdMailOutline size={25}/></li>
            </ul>

            {/* <h5 className="text-center mt-3">Jueves 16 de noviembre</h5> */}
            <p className="flex justify-center items-center font-sans text-blue"><FechaEnTiempoReal/></p>

            <p className="ml-7 text-blue">Nombre.Conductor </p>

            <div>
                <select className="ml-6 bg-blue rounded-2xl text-white" name="" id="">
                    <option value="">Vehiculo XXX</option>
                </select>
            </div>

        <section className="bg-light-blue text-white grid gap-4 mt-10 w-11/12 mx-auto rounded-2xl ">

            <div className="text-lg my-2 mx-3" >
                <h6 >Inicio de horario laboral</h6>
            </div>

            <div className="flex space-x-20 mx-4 mb-3" >
                <IoMdTime size={60} />
                <div>
                    {/* <p>12:45 PM</p> */}
                    <HoraEnTiempoReal className="font-black" />
                    <p className="items-center" >Vehiculo xxx</p>
                </div>
                <div  className=" bg-gray rounded-2xl w-16 h-8 px-1 py-0.5" >
                    <Switch/>
                </div>
            </div>

        </section>

            <button className=" w-11/12 mx-4 my-3 rounded-2xl text-center mt-5 bg-light-blue text-blue text-xl p-2">Iniciar manteniemiento diario</button>

            <section className=" bg-purple w-11/12 mx-4 my-3 rounded-2xl text-blue" >
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

            </section>

            <div className="mt-96 text-lg flex items-center flex-col text-blue ">
                <BiErrorAlt className="" size={50}/>
                <h1>Finalizar reporte</h1>
            </div>

        </section>
    );
}

export default DashboardAdmi