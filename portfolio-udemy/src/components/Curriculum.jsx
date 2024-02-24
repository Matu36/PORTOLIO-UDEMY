import React from "react";

export default function Curriculum() {
  return (
    <div className="curriculum">
      <h1 className="heading">Currículum</h1>
      <h1>Julieta Lanciotti</h1>
      <p>Programadora y Desarrolladora de Backend</p>
      <p>Especializada en NODE.JS, Express, Sequelize y PostgreSQL</p>
      <p>Graduada de la Facultad de Sistemas de la UNLP</p>

      <section>
        <h2>Experiencia</h2>
        <ul>
          <li>
            <strong>Desarrollador Backend</strong> - [Nombre de la Empresa] -
            [Ubicación] - [Fecha de Inicio] a [Fecha de Fin]
            <ul>
              <li>
                Trabajé en el desarrollo y mantenimiento de sistemas backend
                utilizando tecnologías como NODE.JS, Express, Sequelize y
                PostgreSQL.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Conocimientos</h2>
        <ul>
          <li>NODE.JS</li>
          <li>Express</li>
          <li>Sequelize</li>
          <li>PostgreSQL</li>
        </ul>
      </section>

      <section>
        <h2>Educación</h2>
        <ul>
          <li>
            <strong>Facultad de Sistemas</strong> - Universidad Nacional de La
            Plata (UNLP) - [Fecha de Graduación]
          </li>
        </ul>
      </section>

      <section>
        <h2>Proyectos Personales</h2>
        <ul>
          <li>
            <strong>Nombre del Proyecto</strong> - [Descripción breve del
            proyecto] - [Fecha de Inicio] a [Fecha de Fin]
          </li>
        </ul>
      </section>

      <section>
        <h2>Reconocimientos y Premios</h2>
        <ul>
          <li>[Nombre del Reconocimiento/Premio] - [Fecha de Recepción]</li>
        </ul>
      </section>
    </div>
  );
}
