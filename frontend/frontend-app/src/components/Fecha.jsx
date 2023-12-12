import { useState, useEffect } from 'react';

function FechaEnTiempoReal() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];

  return (
    <div>
      <h1>{dayOfWeek} {date.getDate()} de {month} de {date.getFullYear()}</h1>
    </div>
  );
}

export default FechaEnTiempoReal;