import { useForm } from "react-hook-form";
import "../../styles/NewProfile.css";
import { postEmployee } from "../../services/fetchService";
import Swal from "sweetalert2";


export const NewProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm()

  const onFileInputChange = ( {target}) => {
      if(target.files === 0) return;

      dispatch( startUploadingFiles(target.files))

  }

  const onSubmit = async data => {
    try {
      const response = await postEmployee(data)
      console.log("RESPONSE")
      console.log(response)
      Swal.fire(`Empleado creado!`)
      reset()
    } catch (error) {
      console.log("ERROR")
      console.log(error.response.data)
      Swal.fire(`Error al crear empleado! \n ${error.response.data.details[0]}`)
    }
  }

  return (
    <div className="container-profile">
      <section className="new-profile-continer shadow-custom">
        <div className="continer-empleado-vehiculooff  text-[#0D1544]">
          <form className="form"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="container-form">
              <div className="section-1-form">
                <h2 className="font-bold text-[#0D1544] lg:text-2xl md:text-2xl text-lg">
                  Nuevo empleado
                </h2>
                <div className="relative mt-3">
                  <input
                    className="block w-[90%]   h-[56px]  cursor-pointer px-2.5 pb-2.5 pt-4 w text-lg text-gray-900 bg-transparent rounded-lg border-1 border-[#0D1544] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer"
                    placeholder=""
                    autoComplete="text"
                    type="text"
                    id="name"
                    {...register('name', {
                        required: 'La marca es obligatoria',
                        pattern: {
                          value: /^[a-zA-Z0-9\s]+$/,
                          message: 'La marca no es válida'
                        },
                        // valueAsNumber: true,
                        min: 3,
                        max: 15
                      })}

                  />

                  <label
                    htmlFor="name"
                    className={
                      "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    }
                  >
                    Nombre del empleado*
                  </label>
                </div>
                <div className="relative mt-3">
                  <input
                    className="block w-[90%] h-[56px] cursor-pointer px-2.5 pb-2.5 pt-4 w text-lg text-gray-900 bg-transparent rounded-lg border-1 border-[#0D1544] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer"
                    placeholder=""
                    autoComplete="text"
                    type="text"
                    id="lastname"
                    {...register('lastName', {
                        required: 'La marca es obligatoria',
                        pattern: {
                          value: /^[a-zA-Z0-9\s]+$/,
                          message: 'La marca no es válida'
                        },
                        // valueAsNumber: true,
                        min: 3,
                        max: 15
                      })}
                  />

                  <label
                    htmlFor="lastname"
                    className={
                      "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    }
                  >
                    Apellido del empleado*
                  </label>
                </div>
                <div className="relative mt-3">
                  <input
                    className="block w-[90%] h-[56px] cursor-pointer px-2.5 pb-2.5 pt-4 w text-lg text-gray-900 bg-transparent rounded-lg border-1 border-[#0D1544] appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0D1544] peer"
                    placeholder=""
                    autoComplete="text"
                    type="text"
                    id="email"
                    {...register('email', {
                        required: 'La marca es obligatoria',
                        pattern: {
                          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                          message: 'La marca no es válida'
                        },
                        // valueAsNumber: true,
                        min: 3,
                        max: 15
                      })}
                  />

                  <label
                    htmlFor="email"
                    className={
                      "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/3 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    }
                  >
                    Correo electrónico del empleado*
                  </label>
                </div>
              </div>
              <div className="section-2-form mt-3">
                <div className="mx-auto max-w-xs mt-3">
                  <label
                    htmlFor="photo"
                    className="mb-1 block text-xl font-medium text-gray-700"
                  >
                    Foto del empleado*
                  </label>
                  <input
                  onChange ={onFileInputChange}
                    id="photo"
                    type="file"
                    className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-dark-blue-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-dark-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                    {...register('photo', { required: 'Campo requerido' })}
                  />
                </div>

                <h2 className="mt-8 text-2xl">Rol del empleado*</h2>
                <div className="mx-auto space-y-3">
                  <div className="flex items-center space-x-2 mt-4 ">
                    <input
                      type="radio"
                      id="rol1"
                      name="roleName"
                      value="DRIVER"
                      className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                      {...register('roleName', { required: 'Campo requerido' })}
                    />
                    <label
                      htmlFor="rol1"
                      className="text-sm font-medium text-gray-700"
                    >
                      Chofer
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="rol2"
                      value="OWNER"
                      name="roleName"
                      className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                      {...register('roleName', { required: 'Campo requerido' })}
                    />
                    <label
                      htmlFor="rol2"
                      className="text-sm font-medium text-gray-700"
                    >
                      Gerente
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="rol3"
                      value="MAINTENANCE"
                      name="roleName"
                      className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                      {...register('roleName', { required: 'Campo requerido' })}
                    />
                    <label
                      htmlFor="rol3"
                      className="text-sm font-medium text-gray-700"
                    >
                      Jefe de mantenimiento
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button
              // type="button"
              className="rounded-lg border bg-dark-blue border-bg-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300"
            >
              Confirmar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewProfile;
