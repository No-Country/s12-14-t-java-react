
const AddVehicle = () => {

    

    return (

        <div className="w-80 h-full my-4">
            
            <h1 className="ml-6 mt-16 text-[#0D1444] text-[22px] font-bold font-['Poppins']">
            Agregar vehículo
            </h1>

            <h2 className="ml-6 mt-2 text-[#0D1444] text-lg font-medium font-['Poppins'] 
            leading-normal tracking-tight">
            Tipo de vehículo
            </h2>
        
            <div>

                <section className="ml-6 mt-2">
                
                    <div>
                        <label className="text-[#0D1444]" htmlFor="option1">
                            <input  className="mr-2"  type="radio" id="opcion1" name="vehicleType" value="option1" />
                            Acoplado
                        </label>
                    </div>
                    <div>
                        <label className="text-[#0D1444]" htmlFor="option2">
                            <input className="mr-2 border-spacing-2" type="radio" id="option2" name="vehicleType" value="option2" />
                            Automóvil
                        </label>
                    </div>
                    <div>
                        <label className="text-[#0D1444]" htmlFor="option3">
                            <input className="mr-2" type="radio" id="option3" name="vehicleType" value="option3" />
                            Camión
                        </label>
                    </div>
                    <div>
                        <label className="text-[#0D1444]" htmlFor="option4">
                            <input className="mr-2" type="radio" id="option4" name="vehicleType" value="option4" />
                            Camioneta
                        </label>
                    </div>
                    <div>
                        <label className="text-[#0D1444]" htmlFor="option5">
                            <input className="mr-2" type="radio" id="option5" name="vehicleType" value="option5" />
                            Combi
                        </label>
                    </div>
                    <div>
                        <label className="text-[#0D1444]" htmlFor="option6">
                            <input className="mr-2" type="radio" id="option6" name="vehicleType" value="option6" />
                            Semiremolque
                        </label>
                    </div>

                </section>

                <section className="mt-4">

                    <div className="relative mb-4">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-3 left-6">
                        Marca:
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-5/6 mx-4 rounded"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-3 left-6">
                        Modelo:
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-5/6 mx-4 rounded"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-3 left-6 z-10">
                        Año:
                        </label>
                        <div className="relative">
                        <input type="text" 
                        id="yearField" 
                        name="yearField" 
                        className="border border-[#0D1444] py-2 px-4 w-5/6 mx-4 rounded "
                        placeholder="aaaa"
                        />
                        <select id="yearSelect" 
                        name="yearSelect" 
                        className="absolute inset-0 opacity-0 cursor-pointer z-20">
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
                                <svg className="fill-current h-4 w-4 z-10" 
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L10 
                                    9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 12z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="inputField" className="absolute bg-white px-1 -top-3 left-6">
                        Patente:
                        </label>
                        <input type="text" 
                        id="inputField" 
                        name="inputField" 
                        className="border border-[#0D1444] py-2 px-4 w-5/6 mx-4 rounded"/>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddVehicle;
