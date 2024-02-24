import React from "react";
import { Link } from "react-router-dom";
import ListadoTrabajos from "./ListadoTrabajos";

export default function Inicio() {
  return (
    <div className="home">
      <h1>
        Hola, soy <strong> Julieta Lanciotti </strong> y soy desarrolladora web
        en la ciudad de La Plata; ofrezco mis servicios de{" "}
        <strong>programación </strong> y <strong>desarrollo </strong> en todo
        tipo de proyectos web.
      </h1>

      <h2 className="title">
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
        relevancia en internet
        <div style={{ padding: "10px" }}>
          <Link to="/contacto">Contáctame</Link>
        </div>
      </h2>

      <section className="lasts-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <ListadoTrabajos limite="2" />
      </section>
    </div>
  );
}
