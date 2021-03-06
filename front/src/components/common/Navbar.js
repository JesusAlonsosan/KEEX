import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ _id, email, username, logout }) => (
  <nav
    className="uk-navbar-container"
    uk-navbar="true"
    uk-sticky="bottom: #offset"
  >
    <div className="uk-navbar-left">
      <a className="uk-navbar-item uk-logo uk-flex uk-flex-left" href="/">
        <img src={require("../assets/img/logo/logocool2.png")} width="80%" />
      </a>
    </div>

    <div className="uk-navbar-right">
      {!_id ? (
        <ul className="uk-navbar-nav uk-text-lead">
          <li>
            <Link to="/login" className="">Iniciar sesión</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
        </ul>
      ) : (
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/home" className="">Por categorias</Link>
          </li>
          <li>
            <Link to="/swipe">Todo Aleatorio</Link>
          </li>
          <li>
            <Link to="/profile">Perfil</Link>
          </li>
          <li onClick={logout}>
            <a href="#navbar">Cerrar sesión</a>
          </li>
        </ul>
      )}
    </div>
  </nav>
);

export default NavBar;
