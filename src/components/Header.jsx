import { useState, useEffect } from "react";
import style from "./styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // Cambia el valor para ajustar cuándo quieres que aparezca el fondo
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${style.header} ${isScrolled ? style.scrolled : ""}`}>
      <h1 className={style.title}>Patagonian Devs</h1>
      <div
        className={style.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div />
        <div />
        <div />
      </div>
      <nav className={`${style.nav} ${isOpen ? style.open : ""}`}>
        <ul>
          <li>
            <a href="#Home">Inicio</a>
          </li>
          <li>
            <a href="#">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#">Staff</a>
          </li>

          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#">Trabajos</a>
          </li>
          <li>
            <a href="#ContactUs">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
