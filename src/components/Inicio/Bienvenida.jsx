import React from 'react'
import { illustracionHome } from '../../media/imagenes'

const Bienvenida = () => {
  return (
    <section className='bienvenida'>
        <div>
            <img src={illustracionHome} alt='ilustración home'/>
        </div>
        <div>
            <h3>¡Te damos la bienvenida a MentalApp!</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi vero provident saepe voluptatem omnis.</p>
            <div>
              <button>Visitar foro</button>
              <button>Hablar con un profesional</button>
            </div>
        </div>
    </section>
  )
}

export default Bienvenida