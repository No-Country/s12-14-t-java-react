import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <section className="min-h-screen">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="col-auto px-3 py-5 text-center md:text-left md:h-screen">
          <Link to="/" className="inline-block">
            <Logo />
          </Link>
          <section className="flex flex-col gap-2 text-white text-3xl">
            <div className="flex items-center">
              <img
                src="/img/img_seguimiento.svg"
                alt="Seguimiento en tiempo real"
                className="w-20 h-24"
              />
              <div className="ml-2">Seguimiento en tiempo real</div>
            </div>
            <div className="flex items-center">
              <img
                src="/img/img_seguridad.svg"
                alt="Seguridad en tu mantenimiento"
                className="w-20 h-24"
              />
              <div className="ml-2">Seguridad en tu mantenimiento</div>
            </div>

            <div className="flex items-center">
              <img
                src="/img/img_presupuesto.svg"
                alt="Presupuestos mensuales"
                className="w-20 h-24"
              />
              <div className="ml-2">Presupuestos mensuales</div>
            </div>

            <div className="flex items-center">
              <img
                src="/img/img_estado.svg"
                alt="Estado de tus vehículos"
                className="w-20 h-24"
              />
              <div className="ml-2">Estado de tus vehículos</div>
            </div>

            <div className="flex items-center">
              <img
                src="/img/img_ayuda.svg"
                alt="Ayuda y soporte 24 horas"
                className="w-20 h-24"
              />
              <div className="ml-2">Ayuda y soporte 24 horas</div>
            </div>
          </section>
        </div>
        <div className="col-auto px-3 py-5 md:h-screen">
          <img src="/img/img_vehicle.svg" alt="" />
          <form className="block py-5 text-center">
            <input type="text" placeholder="Ingrese su correo" />
            <input type="password" placeholder="Ingrese su contraseña" />
          </form>
          <a href="#" className="btn btn-template-1">
            Ingresar
          </a>

          <a href="#" className="btn btn-template-1">
            Registrarse
          </a>
          <a href="#" className="btn text-blue text-lg">
            Olvidé mi contraseña
          </a>
        </div>
      </div>
    </section>
  );
};
