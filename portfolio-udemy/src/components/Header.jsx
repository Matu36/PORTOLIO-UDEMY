import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>JL</span>
        <h3>Julieta Lanciotti APIMAKER</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/inicio">Inicio </NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portfolio </NavLink>
          </li>
          <li>
            <NavLink to="/servicios">Servicios </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum">Currículum </NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
