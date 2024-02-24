import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";

export default function Proyecto() {
  const [proyecto, setProyecto] = useState({});
  const params = useParams();

  useEffect(() => {
    const projectId = parseInt(params.id, 10);

    let proyecto = trabajos.filter((trabajo) => trabajo.id === projectId);
    setProyecto(proyecto[0]);
    console.log(proyecto);
  }, [params.id]);

  return (
    <div className="page page-work">
      <div className="mask">
        <img src={"/images/" + proyecto.id + ".jpeg"} alt="" />
      </div>
      <h1 className="heading"> {proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
      <a href={"https://" + proyecto.url} target="_blank">
        {" "}
        Ir al Proyecto
      </a>
    </div>
  );
}
