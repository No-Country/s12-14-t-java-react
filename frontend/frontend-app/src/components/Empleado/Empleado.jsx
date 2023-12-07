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
    id: 26,
    name: "Nombre del chofer 6",
    rol: "Rol 2",
    status: "En actividad",
  },
];

const Empleado = () => {
  return (
    <>
      <section className="flex flex-col justify-center  gap-5">
        <h2 className="text-[#0D1544] font-bold text-xl m-6 ">Empleados</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto ">
          {EmpleadosLista.map((empleado) => (
            <article
              key={empleado.id}
              className="flex rounded-xl shadow-md space-x-4 pr-5 w-80"
            >
              <img
                src="/img/chofer.png"
                alt="profile"
                className="rounded-l-lg"
              />
              <div className="mt-3">
                <h2 className="text-[#31429B] text-sm font-semibold">
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

        <button className="rounded-md bg-dark-blue text-white w-72 h-10 md:w-96 lg:w-[635px] mx-auto">
          Eliminar selección
        </button>
      </section>
    </>
  );
};

export default Empleado;