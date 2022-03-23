import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo, menuIcon, menuIconLight } from "../../media/imagenes";
import { logoutAsync } from "../../redux/actions/actionLogin";

const Navbar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const clase = showMenu ? "menu" : "";
  const icon = showMenu ? menuIconLight : menuIcon;

  // Cerrar sesión

  const handleLogout = () => {
    dispatch(logoutAsync());
  };

  // Redireccionar

  const redForo = () => {
    navigate("/foro");
  };
  const redCitas = () => {
    navigate("/citas");
  };
  const redInicio = () => {
    navigate("/inicio");
  };
  const redPerfil = () => {
    navigate("/perfil");
  };
  const redServicios = () => {
    navigate("/servicios");
  };

  return (
    <header className={clase}>
      <div>
        <img src={logo} alt="logo MentalApp" />
        <h1 onClick={() => redInicio()}>MentalApp</h1>
      </div>
      <nav>
        <div>
          <h4 onClick={() => redServicios()}>Servicios</h4>
          <ul className="desplegable servicios">
            <li>Chat con un profesional</li>
            <li onClick={() => redCitas()}>
              Agendar una cita con un profesional
            </li>
            <li onClick={() => redForo()}>Visitar foro</li>
          </ul>
        </div>
        <div>
          <h4>Sobre nosotros</h4>
        </div>
        <div>
          <h4 onClick={() => redPerfil()}>Perfil</h4>
          <ul className="desplegable perfil">
            <li>Editar perfil</li>
            <li onClick={() => handleLogout()}>Cerrar sesión</li>
          </ul>
        </div>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)}>
        <img src={icon} alt="menu icon" />
      </button>
    </header>
  );
};

export default Navbar;
