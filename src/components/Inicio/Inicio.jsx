import React from 'react';
import Bienvenida from './Bienvenida';
import Experiencias from './Experiencias';
import SobreNosotros from './SobreNosotros';
import { logo } from "../../media/imagenes";
import { useNavigate } from "react-router-dom";

const Inicio = ({stateModal}) => {

  const [modalHome, setModalHome] = stateModal;
  const navigate = useNavigate();

  const ayuda = () =>{

      setModalHome(false);
      navigate('/chat');

  }

  return (
    <main>
        <Bienvenida/>
        <SobreNosotros/>
        <Experiencias/>
        <div className={modalHome? "modal" : "d-none"}>
            <div className='disc-home'>
                  <img src={logo} alt='logo MentalApp'/>
                  <h6>¡Te damos la bienvenida a MentalApp!</h6>
                  <p>Si necesitas ayuda profesional con urgencia puedes ir a nuestro chat de atención haciendo click en el botón rojo.</p>
                  <div>
                     <button onClick={()=>ayuda()} >Necesito ayuda</button>
                     <button onClick={()=>setModalHome(false)} >Explorar MentalApp</button>
                  </div>
            </div>
        </div>
    </main>
  )
}

export default Inicio