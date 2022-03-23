import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo, logoLight, menuIcon, menuIconLight } from "../../media/imagenes";

const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const clase = showMenu ? "menu" : "";
  const iconMenu = showMenu ? menuIconLight : menuIcon;
  const iconLogo = showMenu ? logoLight : logo;

  const redirect = (ruta) =>{
    navigate(ruta);
    setShowMenu(false);
  }

  return (
    <header className={clase}>
      <div onClick={() => redirect('/')}>
        <img src={iconLogo} alt="logo MentalApp" />
        <h1>MentalApp</h1>
      </div>
      <nav>
        <div>
          <h4>Servicios</h4>
          <ul className="desplegable servicios">
            <li>Chat con un profesional</li>
            <li onClick={() => redirect('/citas')}>
              Agendar una cita con un profesional
            </li>
            <li onClick={() => redirect('/foro')}>Visitar foro</li>
          </ul>
        </div>
        <div>
          <h4>Sobre nosotros</h4>
        </div>
        <div>
          <h4>Perfil</h4>
          <ul className="desplegable perfil">
            <li>Editar perfil</li>
            <li>Cerrar sesión</li>
          </ul>
        </div>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)}>
        <img src={iconMenu} alt="menu icon" />
      </button>
    </header>
  );
};

export default Navbar;
