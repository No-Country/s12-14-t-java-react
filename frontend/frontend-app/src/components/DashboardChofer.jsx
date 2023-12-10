import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
// import { RiArrowDownSFill } from "react-icons/ri";

function DashboardChofer () {
 
   
    
    return(
        <section>
            <div className="flex mt-12 gap-6">
            <img className="ml-6 rounded-2xl" src="././img/chofer.png" alt="" />
            <div className="flex flex-col">
            <h6 className="text-xl text-[#31429B] font-semibold">Nombre empleado</h6>
            <p className="font-semibold text-base">Rol</p>
            </div>
            </div>
            <button className="w-[75%] text-center mt-10 ml-10 text-[#31429B] font-semibold text-base">Carga tus datos laborales para completar tu perfil</button>
            <div className="gap-5 mt-10 ml-8">
                <h1 className="text-base font-semibold ">Carnet de conducir habilitante*</h1>
            <button className=" bg-blue mt-3 w-40  h-7 text-base text-white">Examinar</button>
            </div>
            
    {/* Calendario */}
    
  


   
  
        </section>
    )
}

export default DashboardChofer



