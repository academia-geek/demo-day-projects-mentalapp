import React from 'react'
import { useNavigate } from 'react-router-dom'
import { illustracionHome } from '../../media/imagenes'

const Bienvenida = () => {

  const navigate = useNavigate()

  return (
    <section className='bienvenida'>
        <div>
            <img src={illustracionHome} alt='ilustración home'/>
        </div>
        <div>
            <h3>¡Te damos la bienvenida a MentalApp!</h3>
            <p>MentalApp te ofrece la posibilidad de hablar abiertamente sobre tu salud mental.
              Además te ayuda a que desarrolles las habilidades necesarias para gestionar tus emociones.
              Te invitamos a que visites y participes en nuestro foro, o también puedes hablar con un profesional agendando una cita o accediendo al chat de ayuda.</p>
            <div>
              <button onClick={()=>navigate("/foro")} >Visitar foro</button>
              <button onClick={()=>navigate("/chat")} >Hablar con un profesional</button>
            </div>
        </div>
    </section>
  )
}

export default Bienvenida