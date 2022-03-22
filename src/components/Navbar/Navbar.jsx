import React from 'react'
import { logo } from '../../media/imagenes'

const Navbar = () => {
  return (
    <header>
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
    </header>
  )
}

export default Navbar