import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (

      <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <nav className="navbar navbar-expand-lg">
                          <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img src={"images/logo.jpeg"} alt="logo" width={80} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                              <ul className="navbar-nav">
                                <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="/Cuadros">Cuadros</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/Lienzo">Lienzo</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/Especiales">Especiales</a>
                                </li>
                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="/Mas" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mas
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/Ubicacion">Ubicacion</a></li>
                                    <li><a className="dropdown-item" href="/Contacto">Contacto</a></li>
                                    <li><a className="dropdown-item" href="/Ustedes">Ustedes</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                    </nav>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-end">
                <CartWidget/>
              </div>
            </div>
      </div>
    )
}

export default NavBar;