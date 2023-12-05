
const AddVehicle = () => {

    

    return (

        <div className="w-80 h-full my-4">
            
            <h1 className="ml-6 mt-16 text-indigo-950 text-[22px] font-bold font-['Poppins']">
            Agregar vehículo
            </h1>

            <h3 className="ml-6 mt-2 text-indigo-950 text-base font-medium font-['Poppins'] 
            leading-normal tracking-tight">
            Tipo de vehículo
            </h3>
        
            <div>

                <section className="ml-6 mt-2">
                
                    <div>
                        <label className=" " htmlFor="option1">
                            <input  className="mr-2 text-lg" type="radio" id="option1" name="vehicleType" value="option1" />
                            Opción 1
                        </label>
                    </div>
                    <div>
                        <label htmlFor="option2">
                            <input type="radio" id="option2" name="vehicleType" value="option2" />
                            Opción 2
                        </label>
                    </div>
                    <div>
                        <label htmlFor="option3">
                            <input type="radio" id="option3" name="vehicleType" value="option3" />
                            Opción 3
                        </label>
                    </div>
                    <div>
                        <label htmlFor="option4">
                            <input type="radio" id="option4" name="vehicleType" value="option4" />
                            Opción 4
                        </label>
                    </div>
                    <div>
                        <label htmlFor="option5">
                            <input type="radio" id="option5" name="vehicleType" value="option5" />
                            Opción 5
                        </label>
                    </div>
                    <div>
                        <label htmlFor="option6">
                            <input type="radio" id="option6" name="vehicleType" value="option6" />
                            Opción 6
                        </label>
                    </div>

                </section>

            </div>
        
        </div>
    );
}

export default AddVehicle;
