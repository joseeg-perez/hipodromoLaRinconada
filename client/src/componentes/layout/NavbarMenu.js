import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/LaRinconadaPapa.png";
import perfil from "../../assets/person-circle.svg";
import tuerquita from "../../assets/gear.svg";
import menu from "../../assets/menu.svg"

const NavbarMenu = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <NavLink href="#" to="/principal">
          <img
            className="btn"
            data-bs-toggle="button"
            aria-pressed="false"
            src={logo}
            alt="/"
            width={80}
            height={80}
          />
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink href="#" className="nav-link" to="/resultados">
              Resultados
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/ejemplares"
              href="ejemplares"
              className="nav-link"
              data-bs-target="ejemplares"
              data-bs-toggle="ejemplares"
            >
              Ejemplares
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#" className="nav-link" to="/jinetes">
              Jinetes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#" className="nav-link" to="/studs">
              Studs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#" className="nav-link" to="/propietarios">
              Propietarios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#" className="nav-link" to="/entrenadores">
              Entrenadores
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#" className="nav-link" to="/eventos">
              Eventos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#" className="nav-link" to="/apuestas">
              Apuestas
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink href="#" className="nav-link" to="/perfil">
              <img
                className="btn"
                data-bs-toggle="button"
                aria-pressed="false"
                src={perfil}
              />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="#" className="nav-link" to="/menu">
              <img
                className="btn"
                data-bs-toggle="button"
                aria-pressed="false"
                src={menu}
                
              />
            </NavLink>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
