import React from "react";

export default function Curriculum() {
  return (
    <div className="curriculum">
      <h1 className="heading">Currículum</h1>
      <h1>Julieta Lanciotti</h1>
      <p>Programadora y Desarrolladora de Backend</p>
      <p>Especializada en NODE.JS, Express, Sequelize y PostgreSQL</p>
      <p>Graduada de la Facultad de Sistemas de la UNLP</p>

      <br />
      <h2>Experiencia</h2>

      <p>
        <strong>Desarrollador Backend</strong> - [Nombre de la Empresa] -
        [Ubicación] - [Fecha de Inicio] a [Fecha de Fin]
      </p>
      <p>
        {" "}
        Trabajé en el desarrollo y mantenimiento de sistemas backend utilizando
        tecnologías como NODE.JS, Express, Sequelize y PostgreSQL.
      </p>
      <br />
      <h2>Conocimientos</h2>

      <p>NODE.JS </p>
      <p>Express </p>
      <p>Sequelize </p>
      <p>PostgreSQL </p>

      <br />
      <h2>Educación</h2>

      <p>
        <strong>Facultad de Sistemas</strong> - Universidad Nacional de La Plata
        (UNLP) - [Fecha de Graduación]
      </p>
      <br />
      <h2>Proyectos Personales</h2>

      <p>
        {" "}
        <strong>Nombre del Proyecto</strong> - [Descripción breve del proyecto]
        - [Fecha de Inicio] a [Fecha de Fin]
      </p>
      <br />
      <h2>Reconocimientos y Premios</h2>
      <p>[Nombre del Reconocimiento/Premio] - [Fecha de Recepción]</p>
    </div>
  );
}
