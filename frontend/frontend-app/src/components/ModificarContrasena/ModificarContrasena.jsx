
import "./ModificarContrasena.css"
import { useState } from "react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";



function ModificarContrasena() {
    const [contrasenaActual, setContrasenaActual] = useState('');
    const [nuevaContrasena, setNuevaContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [errorContrasenaActual, setErrorContrasenaActual] = useState('');
    const [errorNuevaContrasena, setErrorNuevaContrasena] = useState('');
    const [errorConfirmarContrasena, setErrorConfirmarContrasena] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validarFormulario()) {
            console.log('Formulario válido. Enviando...');
        }
    };

    const validarFormulario = () => {
        let isValid = true;

        isValid = validarContrasenaActual() && isValid;
        isValid = validarNuevaContrasena() && isValid;
        isValid = validarConfirmarContrasena() && isValid;

        return isValid;
    };

    const validarContrasenaActual = () => {
        if (contrasenaActual.trim() === '') {
            setErrorContrasenaActual('La contraseña actual es obligatoria');
            return false;
        }

        setErrorContrasenaActual('');
        return true;
    };

    const validarNuevaContrasena = () => {
        if (nuevaContrasena.trim() === '') {
            setErrorNuevaContrasena('La nueva contraseña es obligatoria');
            return false;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

        if (!regex.test(nuevaContrasena)) {
            setErrorNuevaContrasena('La contraseña debe tener entre 8 y 12 caracteres, una letra mayúscula, una minúscula, un número y un caracter especial');
            return false;
        }


        setErrorNuevaContrasena('');
        return true;
    };

    const validarConfirmarContrasena = () => {
        if (confirmarContrasena.trim() === '') {
            setErrorConfirmarContrasena('La confirmación de contraseña es obligatoria');
            return false;
        }

        if (confirmarContrasena !== nuevaContrasena) {
            setErrorConfirmarContrasena('La contraseña no coincide.');
            return false;
        }

        setErrorConfirmarContrasena('');
        return true;
    };


    const mostrarAsterisco = !contrasenaActual.trim();
    const [icoPassword, setsicoPassword] = useState({
        contrasenaActual: false,
        nuevaContrasena: false,
        confirmarContrasena: false,
    });


    return (

      
        <section className="flex flex-col ml-5 items-center mt-5">
             
            <h1 className="Mostrar-title font-bold text-[#0D1544] lg:text-2xl md:text-2xl text-lg ml-0">Modificar la Contraseña</h1>
            <div className="Mostrar-container flex items-center lg:justify-center    mt-10">
                <img className=" w-[180] contents md:flex" src="././img/encrypted.svg" alt="logo de modificar contraseña" />
                <div className="flex flex-col gap-7   mt-5">
                    
                    <form className="flex flex-col gap-10 w-[70%]" onSubmit={handleSubmit}>
                        <div class="relative">

                            <input
                                className="block xl:w-[350px] xl:h-[56px] w-[290px] h-[56px] sm:w-[350px] sm:h-[56px] cursor-pointer px-2.5 pb-2.5 pt-4 w text-lg text-gray-900 bg-transparent rounded-lg border-1 border-[#0D1544] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer" placeholder=""
                                autoComplete="text"
                                type={icoPassword.contrasenaActual ? "text" : "password"}
                                id="InputContainer"
                                value={contrasenaActual}
                                onChange={(e) => setContrasenaActual(e.target.value)}

                            />
                            <div
                                className="icono flex cursor-pointer absolute right-1 top-1/2 transform -translate-y-1/2 items-center"
                                onClick={() => setsicoPassword((prev) => ({ ...prev, contrasenaActual: !prev.contrasenaActual }))}
                            >
                                {icoPassword.contrasenaActual ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
                            </div>

                            <label htmlFor="InputContainer" className={"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"}
                            >
                                Contraseña actual {mostrarAsterisco && <span className="title-error">*</span>}
                            </label>

                            {errorContrasenaActual && <p className="title-error w-[350px] mt-2">{errorContrasenaActual}</p>}
                        </div>

                        <div class="relative">
                            <input
                                type={icoPassword. nuevaContrasena ? "text" : "password"}
                                id="miInput"
                                value={nuevaContrasena}
                                onChange={(e) => setNuevaContrasena(e.target.value)}
                                className="block xl:w-[350px] xl:h-[56px] w-[290px] h-[56px] sm:w-[350px] sm:h-[56px] cursor-pointer px-2.5 pb-2.5 pt-4 w text-lg text-gray-900 bg-transparent rounded-lg border-1  border-[#0D1544] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer" placeholder=" "
                            />
                            <div
                                className="icono flex cursor-pointer absolute right-1 top-1/2 transform -translate-y-1/2 items-center"
                                onClick={() => setsicoPassword((prev) => ({ ...prev,  nuevaContrasena: !prev. nuevaContrasena}))}
                            >
                                {icoPassword. nuevaContrasena? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
                            </div>


                            <label htmlFor="miInput" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                                Nueva Contraseña {mostrarAsterisco && <span className="title-error">*</span>}
                            </label>
                            {errorNuevaContrasena && <p className="title-error w-[350px] mt-2">{errorNuevaContrasena}</p>}
                        </div>

                        <div class="relative ">
                            <input
                                type={icoPassword. confirmarContrasena ? "text" : "password"}
                                id="input"
                                className="blockxl:w-[350px] xl:h-[56px] w-[290px] h-[56px] sm:w-[350px] sm:h-[56px] cursor-pointer px-3.5 pb-2.5 pt-5 w text-lg text-gray-900 bg-transparent rounded-lg border-1  border-[#0D1544] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer" placeholder=" "
                                value={confirmarContrasena}
                                onChange={(e) => setConfirmarContrasena(e.target.value)}
                            />
                            <div
                                className="icono flex cursor-pointer absolute right-1 top-1/2 transform -translate-y-1/2 items-center"
                                onClick={() => setsicoPassword((prev) => ({ ...prev,  confirmarContrasena: !prev. confirmarContrasena }))}
                            >
                                {icoPassword. confirmarContrasena ? <IoMdEye size={20} /> : <IoIosEyeOff size={20} />}
                            </div>
                            <label htmlFor="input" className="absolute text-sm text-[#0D1544] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >Confirmar Contraseña {mostrarAsterisco && <span className="title-error">*</span>}
                            </label>
                            {errorConfirmarContrasena && <p className="title-error w-[350px] mt-2">{errorConfirmarContrasena}</p>}
                        </div>


                        <button type="submit" className="xl:w-[350px] md:w-[350px] w-[290px] sm:w-[350px] bg-[#31429B] text-white rounded-sm  py-3 hover:bg-[#2E4BDF]">Confirmar cambio</button>
                    </form>
                </div>
            </div>
            

        </section>
    );
};

export default ModificarContrasena