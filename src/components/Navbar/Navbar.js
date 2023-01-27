import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <button className="__btn-nav" onClick={showNavbar}>
        <FaBars />
      </button>
      <nav ref={navRef}>
        <a href="/#">Inicio</a>
        <a href="/#">Peliculas</a>
        <a href="/#">Series</a>
        <a href="/#">Generos</a>
        <button className="__btn-nav __btn-nav-close" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="__profile">
        {/* TODO Falta complementar con renderizado condicional, según este
        conectado o no el Usuario. */}
        <a href="/#">Inicio Sesión</a>
      </div>
    </header>
  );
};

export default Navbar;
