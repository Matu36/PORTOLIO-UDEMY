import React from "react";

export default function Contacto() {
  return (
    <div className="page">
      <h1>Contacto</h1>
      <form className="contact" action="mailto:matipineda85@live.com.ar">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellidos" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Motivo de contacto"></textarea>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
}
