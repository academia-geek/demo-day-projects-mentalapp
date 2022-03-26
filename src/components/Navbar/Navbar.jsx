import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo, logoLight, menuIcon, menuIconLight } from "../../media/imagenes";
import { logoutAsync } from "../../redux/actions/actionLogin";

const Navbar = ({isLoggedIn}) => {

   const dispatch = useDispatch();
   const [showMenu, setShowMenu] = useState(false);
   const navigate = useNavigate();
   const clase = showMenu ? "menu" : "";
   const iconMenu = showMenu ? menuIconLight : menuIcon;
   const iconLogo = showMenu ? logoLight : logo;

   const redirect = (ruta) => {
      navigate(ruta);
      setShowMenu(false);
   };

   const handleLogout = () => {
      dispatch(logoutAsync());
      setShowMenu(false);
   };

   useEffect(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <header className={clase}>
         <div onClick={() => redirect("/inicio")}>
            <img src={iconLogo} alt="logo MentalApp" />
            <h1>MentalApp</h1>
         </div>
         <nav>
            <div>
               <h4 onClick={() => redirect("/servicios")}>Servicios</h4>
               <ul className="desplegable servicios">
                  <li>Chat con un profesional</li>
                  <li onClick={() => redirect("/citas")}>Agendar una cita con un profesional</li>
                  <li onClick={() => redirect("/foro")}>Visitar foro</li>
               </ul>
            </div>
            <div>
               <h4>Sobre nosotros</h4>
            </div>
            { isLoggedIn &&
               <div>
                  <h4 onClick={() => redirect("/perfil")}>Perfil</h4>
                  <ul className="desplegable perfil">
                     <li>Editar perfil</li>
                     <li onClick={() => handleLogout()}>Cerrar sesión</li>
                  </ul>
               </div>
            }
            { !isLoggedIn &&
               <div>
                  <h4 onClick={() => redirect("/login")}>Iniciar sesión</h4>
               </div>
            }
         </nav>
         <button onClick={() => setShowMenu(!showMenu)}>
            <img src={iconMenu} alt="menu icon" />
         </button>
      </header>
   );
};

export default Navbar;
