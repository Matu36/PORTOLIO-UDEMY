import React from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="home">
      <h1>
        Hola, soy <strong> Julieta Lanciotti </strong> y soy desarrolladora web
        en la ciuda de La Plata; ofrezco mis servicios de{" "}
        <strong>programación </strong> y <strong>desarrollo </strong> en todo
        tipo de proyectos web.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener mas visibilidad y
        relevancia en internet <Link to="/contacto"> Contáctame </Link>
      </h2>
      <section className="lasts-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <div className="works"></div>
      </section>
    </div>
  );
}
