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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi vero provident saepe voluptatem omnis.</p>
            <div>
              <button onClick={()=>navigate("/foro")} >Visitar foro</button>
              <button onClick={()=>navigate("/chat")} >Hablar con un profesional</button>
            </div>
        </div>
    </section>
  )
}

export default Bienvenida