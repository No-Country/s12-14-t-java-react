import {SelectAño, selectedYear} from "../components/SelectAño";



const AddVehicle = () => {
    

    return (

        <div className="w-[95%] h-full md:h-[90%] my-10%  md:w-[50%] md:ml-[35%] lg:w-[60%] lg:ml-[16%]">
            
            <h1 className="ml-[10%] mt-16 text-[#0D1444] text-[22px] font-bold font-['Poppins']">
            Agregar vehículo
            </h1>

            <h2 className="ml-[10%] my-[5%] text-[#0D1444] text-lg font-medium font-['Poppins'] 
            leading-normal tracking-tight">
            Tipo de vehículo
            </h2>
        
            <div>

                <section className="ml-[10%] mt-[2.5%] lg:grid lg:grid-cols-6">
                
                    <div className="my-[2.5%]">
                        <label className="text-[#0D1444] text-sm flex items-center" htmlFor="option1">
                            <input  className="mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent"  type="radio" id="opcion1" name="vehicleType" value="option1" />
                            <span className="inline-block align-middle">Acoplado</span>
                        </label>
                    </div>
                    <div className="my-[2.5%]">
                        <label className="text-[#0D1444] text-sm flex items-center" htmlFor="option2">
                            <input className="mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent" type="radio" id="option2" name="vehicleType" value="option2" />
                            <span className="inline-block align-middle">Automóvil</span>
                        </label>
                    </div>
                    <div className="my-[2.5%]">
                        <label className="text-[#0D1444] text-sm flex items-center" htmlFor="option3">
                            <input className="mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent" type="radio" id="option3" name="vehicleType" value="option3" />
                            <span className="inline-block align-middle">Camión</span>
                        </label>
                    </div>
                    <div className="my-[2.5%]">
                        <label className="text-[#0D1444] text-sm flex items-center" htmlFor="option4">
                            <input className="mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent" type="radio" id="option4" name="vehicleType" value="option4" />
                            <span className="inline-block align-middle">Camioneta</span>
                        </label>
                    </div>
                    <div className="my-[2.5%]">
                        <label className="text-[#0D1444] text-sm flex items-center" htmlFor="option5">
                            <input className="mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent" type="radio" id="option5" name="vehicleType" value="option5" />
                            <span className="inline-block align-middle">Combi</span>
                        </label>
                    </div>
                    <div className="my-[2.5%]">
                        <label className="text-[#0D1444] text-sm flex items-center" htmlFor="option6">
                            <input className="mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent" type="radio" id="option6" name="vehicleType" value="option6" />
                            <span className="inline-block align-middle">Semiremolque</span>
                        </label>
                    </div>

                </section>

                <section className="mt-[5%] lg:grid lg:grid-cols-2 lg:ml-[8%]">

                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[8%] left-[12%] text-[#0D1444] text-sm">
                        Marca
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4 rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[8%] left-[12%] text-[#0D1444] text-sm">
                        Modelo
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4  rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[8%] left-[12%] z-10 text-[#0D1444] text-sm">
                        Año
                        </label>
                        <div className="relative">
                        <input type="text" 
                        id="yearField" 
                        name="yearField"
                        value={selectedYear}
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4  rounded"
                        placeholder="aaaa"
                        />
                        <select id="yearSelect" 
                            name="yearSelect" 
                            className=" bg-blue absolute inset-0 opacity-0 cursor-pointer w-1/2 h-1/2 left-20 z-10">
                            <SelectAño/>                              
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex 
                            items-center px-2 text-gray-700">
                            </div>
                        </div>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[8%] left-[12%] text-sm">
                        Patente
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4  rounded"/>
                    </div>
                </section>
            </div>

            <h2 className="ml-[10%] mt-[10%] mb-[5%] text-[#0D1444] text-lg font-medium font-['Poppins'] 
            leading-normal tracking-tight">
            Tipo de combustible
            </h2>

            <div>

                <section className="ml-[10%] mt-[0%] lg:grid lg:grid-cols-4 lg:ml-[15%]">
                
                    <div className="my-[2.5%]">
                        <label className="text-[#0D1444] text-sm flex items-center" htmlFor="option1">
                            <input  className="mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent"  type="radio" id="opcion1" name="vehicleType" value="option1" />
                            <span className="inline-block align-middle">Biocombustible</span>
                        </label>
                    </div>
                    <div className="my-[2.5%]">
                        <label className="text-[#0D1444] text-sm flex items-center" htmlFor="option2">
                            <input className="mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent" type="radio" id="option2" name="vehicleType" value="option2" />
                            <span className="inline-block align-middle">Gas</span>
                        </label>
                    </div>
                    <div className="my-[2.5%]">
                        <label className="text-[#0D1444] text-sm flex items-center" htmlFor="option3">
                            <input className="mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent" type="radio" id="option3" name="vehicleType" value="option3" />
                            <span className="inline-block align-middle">Gasoil</span>
                        </label>
                    </div>
                    <div className="my-[2.5%]">
                        <label className="text-[#0D1444] text-sm flex items-center" htmlFor="option4">
                            <input className="mr-2 h-4 w-4 appearance-none rounded-full border-2 border-[#0D1444] checked:bg-[#0D1444] checked:border-transparent" type="radio" id="option4" name="vehicleType" value="option4" />
                            <span className="inline-block align-middle">Nafta</span>
                        </label>
                    </div>

                </section>

                <section className="mt-[5%] lg:grid lg:grid-cols-2 lg:ml-[8%]">

                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%]  left-[12%] text-[#0D1444] text-sm">
                        Marca de motor
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4 rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] left-[12%] text-[#0D1444] text-sm">
                        N° de motor
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4 rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] left-[12%] z-10 text-[#0D1444] text-sm">
                        Marca de chasis
                        </label>
                        <div className="relative">
                        <input type="text" 
                        id="yearField" 
                        name="yearField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4 rounded"/>
                        </div>
                    </div>
                    
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] left-[12%] text-[#0D1444] text-sm">
                        N° de chasis
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4 rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] left-[12%] text-[#0D1444] text-sm">
                        Fecha de Vtv
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4 rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%]  left-[12%] text-[#0D1444] text-sm">
                        Cantidad de ejes
                        </label>
                        <input type="text"
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-4 rounded mb-4"                        placeholder="xx"
                        />
                        <select id="ejesSelect" 
                        name="ejesSelect" 
                        className=" bg-blue absolute inset-0 opacity-0 cursor-pointer w-1/2 h-1/2 left-20 z-10">                        
                        <option value="1" disabled selected hidden >Seleccione cantidad de ejes</option>
                        <option value="2">2 ejes</option>
                        <option value="3">3 ejes</option>
                        <option value="4">4 ejes</option>
                        <option value="5">5 ejes</option>
                        </select>
                    </div>
                </section>
            </div>

            <div className="bg-[#31429B] w-[100%] mx-[2.5%] md:-mx-[22%] md:w-[150%] lg:w-[100%] lg:mx-[5%]">
            <h3 className="text-white w-4/5 text-start py-4 mx-4 font-semibold">REGISTRO ÚNICO DE TRANSPORTE DEL AUTOMOTOR</h3>
                <div className="lg:grid lg:grid-cols-3">
                    <div className="relative my-0">
                        <label htmlFor="inputField" className="absolute bg-[#31429B] px-1 -top-[5%]  left-[12%] z-10 text-white text-sm md:left-[22%] lg:top-[8%]">
                        Constancia de inscripción
                        </label>
                        <div className="relative">
                        <input type="text" 
                        id="yearField" 
                        name="yearField" 
                        className="border bg-[#31429B] border-white py-2 px-4 h-14 w-[85%] mx-[8%] my-4 rounded md:w-[57%] md:mx-[21%] lg:w-[70%] lg:ml-[22%]"/>
                        </div>
                    </div>
                    
                    <div className="relative mb-2">
                        <label htmlFor="inputField" className="absolute bg-[#31429B] px-1 -top-[5%] md:top-[8%] left-[12%] text-white text-sm md:left-[22%] lg:top-[8%]">
                        Categoría
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border bg-[#31429B] border-white py-2 px-4 h-14 w-[85%] mx-[8%] my-4 rounded md:w-[57%] md:mx-[21%] lg:w-[70%] lg:ml-[22%]"/>
                         <select id="ejesSelect" 
                        name="ejesSelect" 
                        className=" bg-blue absolute inset-0 opacity-0 cursor-pointer w-1/2 h-1/2 left-20 z-10">                        
                        <option value="1" disabled selected hidden >Seleccione la categoría</option>
                        <option value="2">Categoría 1</option>
                        <option value="3">Categoría 2</option>
                        <option value="4">Categoría 3</option>
                        <option value="5">Categoría 4</option>
                        </select>
                    </div>
                    <div>
                    <button className="w-[65%] h-8 mx-[8%] mb-0 rounded-md bg-white text-[#0D1444] font-semibold text-xs md:w-[30%] md:mx-[21%] lg:mt-[5%] lg:w-[55%]">
                    seleccionar constancia
                    </button>
                    <p className="text-white mx-[10%] pb-4 md:mx-[22%]">imagen.jpg</p>
                    </div>
                </div>

            </div>
            <div className="w-[95%] h-20">
                <button className="w-[90%] h-8 bg-[#31429B] mx-[10%] my-[12%] rounded-md text-white md:w-[90%] lg:mx-[12%]">
                Agregar vehículo
                </button>
            </div>

        </div>
    );
}

export default AddVehicle;
