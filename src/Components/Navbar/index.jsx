import React from "react";
import { NavLink, Link, Redire } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className='nav-link' href='/'>Inicio</a>
            </li>
            <li className="nav-item">
              <a className='nav-link' href='/employees'>Empleados</a>
            </li>
            <li className="nav-item">
              <a className='nav-link' href='groups'>Grupos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar