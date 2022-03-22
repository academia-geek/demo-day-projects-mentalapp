import React, { useState } from 'react'
import { logo, menuIcon, menuIconLight } from '../../media/imagenes'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const clase = showMenu ? "menu" : "";
  const icon = showMenu ? menuIconLight : menuIcon;

  return (
    <header className={clase}>
        <div>
            <img src={logo} alt='logo MentalApp'/>
            <h1>MentalApp</h1>
        </div>
        <nav>
          <div>
            <h4>Servicios</h4>
            <ul className='desplegable servicios'>
              <li>Chat con un profesional</li>
              <li>Agendar una cita con un profesional</li>
              <li>Visitar foro</li>
            </ul>
          </div>
          <div>
            <h4>Sobre nosotros</h4>
          </div>
          <div>
            <h4>Perfil</h4>
            <ul className='desplegable perfil'>
              <li>Editar perfil</li>
              <li>Cerrar sesión</li>
            </ul>
          </div>
        </nav>
        <button onClick={()=>setShowMenu(!showMenu)}>
          <img src={icon} alt='menu icon'/>
        </button>
    </header>
  )
}

export default Navbar