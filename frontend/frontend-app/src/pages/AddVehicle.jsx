
const AddVehicle = () => {

    

    

    return (

        <div className="w-[95%] h-full my-10%">
            
            <h1 className="ml-[10%] mt-16 text-[#0D1444] text-[22px] font-bold font-['Poppins']">
            Agregar vehículo
            </h1>

            <h2 className="ml-[10%] my-[5%] text-[#0D1444] text-lg font-medium font-['Poppins'] 
            leading-normal tracking-tight">
            Tipo de vehículo
            </h2>
        
            <div>

                <section className="ml-[10%] mt-[2.5%]">
                
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

                <section className="mt-[5%]">

                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] text-[#0D1444] text-sm">
                        Marca
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-[2.5%] rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] text-[#0D1444] text-sm">
                        Modelo
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-[2.5%]  rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] z-10 text-[#0D1444] text-sm">
                        Año
                        </label>
                        <div className="relative">
                        <input type="text" 
                        id="yearField" 
                        name="yearField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-[2.5%]  rounded "
                        placeholder="aaaa"
                        />
                        <select id="yearSelect" 
                        name="yearSelect" 
                        className=" bg-blue absolute inset-0 opacity-0 cursor-pointer w-1/2 h-1/2 left-20 z-10">
                                <option value="" disabled selected hidden>Seleccione el año</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                               
                            </select>
                       
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex 
                            items-center px-2 text-gray-700">
                            </div>
                        </div>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] text-sm">
                        Patente
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-[2.5%]  rounded"/>
                    </div>
                </section>
            </div>

            <h2 className="ml-[10%] mt-[10%] mb-[5%] text-[#0D1444] text-lg font-medium font-['Poppins'] 
            leading-normal tracking-tight">
            Tipo de combustible
            </h2>

            <div>

                <section className="ml-[10%] mt-[0%]">
                
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

                <section className="mt-[5%]">

                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] text-[#0D1444] text-sm">
                        Marca de motor
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-[2.5%] rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] text-[#0D1444] text-sm">
                        N° de motor
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-[2.5%] rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] z-10 text-[#0D1444] text-sm">
                        Marca de chasis
                        </label>
                        <div className="relative">
                        <input type="text" 
                        id="yearField" 
                        name="yearField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-[2.5%] rounded "/>
                        </div>
                    </div>
                    
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] text-[#0D1444] text-sm">
                        Cantidad de ejes
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-[2.5%] rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] text-[#0D1444] text-sm">
                        Fecha de Vtv
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-[2.5%] rounded"/>
                    </div>
                    <div className="relative mb-[5%]">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] text-[#0D1444] text-sm">
                        Cantidad de ejes
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-[85%] h-14 mx-[10%] my-[2.5%] rounded mb-4"/>
                    </div>
                </section>
            </div>

            <div className="bg-[#31429B] w-[100%] mx-[2.5%] lg:mx-[3.5%]">
            <h3 className="text-white w-4/5 text-start py-4 mx-4 font-semibold">REGISTRO ÚNICO DE TRANSPORTE DEL AUTOMOTOR</h3>
            <div className="relative my-0">
                        <label htmlFor="inputField" className="absolute bg-[#31429B] px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] z-10 text-white text-sm">
                        Constancia de inscripción
                        </label>
                        <div className="relative">
                        <input type="text" 
                        id="yearField" 
                        name="yearField" 
                        className="border bg-[#31429B] border-white py-2 px-4 h-14 w-[85%] mx-[10%] my-[2.5%] rounded "/>
                        </div>
                    </div>
                    
                    <div className="relative mb-2">
                        <label htmlFor="inputField" className="absolute bg-[#31429B] px-1 -top-[5%] md:top-[8%] lg:top-[19%] left-[12%] text-white text-sm">
                        Categoría
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border bg-[#31429B] border-white py-2 px-4 h-14 w-[85%] mx-[10%] my-[2.5%] rounded"/>
                    </div>
            <button className="w-2/3 h-8 mx-[10%] my-[5%] rounded-md bg-white text-[#0D1444] font-semibold text-xs">
            seleccionar constancia
            </button>

            </div>
            <div className="w-[95%] h-20">
                <button className="w-[80%] h-1/2 bg-[#31429B] mx-[15%] my-[12%] rounded-md text-white">
                Agregar vehículo
                </button>
            </div>

        </div>
    );
}

export default AddVehicle;
