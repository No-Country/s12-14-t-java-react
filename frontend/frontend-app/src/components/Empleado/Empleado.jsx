export const EmpleadosLista = [
  {
    id: 1,
    name: "Nombre del chofer 1",
    rol: "Rol 1",
    status: "Descanso",
  },
  {
    id: 2,
    name: "Nombre del chofer 2",
    rol: "Rol 2",
    status: "Descanso",
  },
  {
    id: 3,
    name: "Nombre del chofer 3",
    rol: "Rol 2",
    status: "En actividad",
  },
  {
    id: 4,
    name: "Nombre del chofer 4",
    rol: "Rol 2",
    status: "En actividad",
  },
  {
    id: 5,
    name: "Nombre del chofer 5",
    rol: "Rol 2",
    status: "En actividad",
  },
  {
    id: 10,
    name: "Nombre del chofer 6",
    rol: "Rol 2",
    status: "En actividad",
  },
  {
    id: 11,
    name: "Nombre del chofer 6",
    rol: "Rol 2",
    status: "En actividad",
  },
  {
    id: 12,
    name: "Nombre del chofer 6",
    rol: "Rol 2",
    status: "En actividad",
  },
];

const Empleado = () => {
  return (
    <>
      <section className="flex  w-[30%]    flex-col justify-start text-lg  gap-5 max-h-screen min-h-screen h-[90vh]">
        <h2 className="text-[#0D1544] mt-10 font-bold text-xl lg:text-2xl md:text-2xl m-6 max-h-screen">Empleados</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1 mx-auto  overflow-y-scroll  max-h-[70vh] min-h-[30vh]">
          {EmpleadosLista.map((empleado) => (
            <article
              key={empleado.id}
              className="flex rounded-xl shadow-md space-x-4 pr-2 max-h-screen mr-5 "
            >
              <img
                src="/img/chofer.png"
                alt="profile"
                className="rounded-l-lg"
              />
              <div className="mt-3">
                <h2 className="text-[#31429B] text-l font-semibold">
                  {empleado.name}
                </h2>
                <h3 className="text-[#0D1544] text-sm font-semibold">
                  {empleado.rol}
                </h3>
                <p className="text-[#0D1544] text-xs font-normal">
                  {empleado.status}
                </p>
              </div>
              <input type="checkbox" />
            </article>
          ))}
        </div>

        <button className="rounded-md bg-dark-blue text-white w-[90%] h-10 md:max-w-[90%] lg:max-w-[60%] mx-auto">
          Eliminar selección
        </button>
      </section>
    </>
  );
};

export default Empleado;
