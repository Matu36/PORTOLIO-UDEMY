import React from "react";
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom";
import ListadoTrabajos from "./ListadoTrabajos";

export default function Portafolio() {
  return (
    <div className="page">
      <h1 className="heading"> Portfolio</h1>
      <ListadoTrabajos />
    </div>
  );
}
