import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <button className="nav-toggle" aria-label="Abrir menú">
            <i className="fas fa-bars"></i>
          </button>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="/" className="nav-menu-link nav-link">
                Inicio
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="/" className="nav-menu-link nav-link">
                Film
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="/" className="nav-menu-link nav-link">
                Series
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
