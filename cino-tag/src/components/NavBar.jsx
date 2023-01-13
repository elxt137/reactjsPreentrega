import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (

      <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <nav className="navbar navbar-expand-lg">
                          <div className="container-fluid">
                          <Link className="navbar-brand" to={"/"}><img src={"/images/logo.jpeg"} alt={"Burger King"} width={64} /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                              <ul className="navbar-nav">
                                <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={"/category/Ofertas"}>Ofertas </NavLink>
                                </li>
                                <li className="nav-item">
                                  <NavLink className="nav-link" to={"/category/acrilico"}>Lienzo</NavLink>
                                </li>
                                <li className="nav-item">
                                  <NavLink className="nav-link" to={"/category/Enmarcados"}>Enmarcados</NavLink>
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