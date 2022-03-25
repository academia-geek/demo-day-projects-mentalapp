import React, {useState, useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../../firebase/firebaseConfig';

const Citas = () => {

  const [profesionales, setProfesionales] = useState([]);
  const [profesional, setProfesional] = useState("");
  const seleccion = profesionales.find((pro)=>(pro.id===profesional));
  const [cargando, setCargando] = useState(true);

  useEffect(()=>{

      getDocs(collection(db, "profesionales"))
        .then((response)=>{
            let data = [];
            response.forEach(doc=>{
               const prof = {...doc.data(), id:doc.id};
               data = [...data, prof]
            })
            setProfesionales(data);
            setCargando(false);
        })
        .catch(error=>{
          console.log(error);
        })

  }, []);

  const getFechas = () =>{

    let resultado = [];

    if(seleccion!==undefined){

      const ahora = Date.now();

      for(let i=1; i<15; i++){

        const fecha = new Date(ahora + i*86400000);
        const dia = fecha.getDay();

        if(seleccion.dias.includes(dia)){

          const day = String(fecha.getDate());
          const month = String(fecha.getMonth() + 1);
          const year = String(fecha.getFullYear());
          const inicio = String(seleccion.horaInicio);
          const final = String(seleccion.horafinal);

          for(let j=inicio; j<final; j++){

            const hora = String(j) + ':00 - ' + String(Number(j)+1) + ':00';
            const nuevaFecha = day + '/' + month + '/' + year + " " + hora;
            
            if(!seleccion.agenda.includes(nuevaFecha)){

              resultado = [...resultado, nuevaFecha];

            }
          }
        }
      }
    }

    return resultado;

  }

  if(cargando){
    return(
      <div className='loader'>
        <h3>Cargando citas...</h3>
      </div>
    )
  }

  return (
    <main className='cntr-citas'>
        <h3>Cita con un profesional</h3>
        <form>
          <div>
            <div className='cntr-profesionales'>
                <h4>Escoge un profesional</h4>
                <div>
                  {
                    profesionales.map((pro)=>(
                      <div key={pro.id} >
                          <input
                              type='radio'
                              name='profesional'
                              id={pro.id}
                          />
                          <label 
                            htmlFor={pro.id} 
                            onClick={()=>setProfesional(pro.id)}>
                            {pro.nombre}
                          </label>
                      </div>
                    ))
                  }
                </div>
            </div>
            <div>
                <h4>Agenda tu cita</h4>
                <div>
                    <label>Nombre</label>
                    <input/>
                </div>
                <div>
                    <label>Correo</label>
                    <input/>
                </div>
                <div>
                    <label>Teléfono</label>
                    <input/>
                </div>
                <div>
                  {seleccion!==undefined &&
                      <select>
                        <option>Seleccionar una fecha y hora</option>
                        {
                          getFechas().map((fec, index)=>(
                              <option key={index}>{fec}</option>
                          ))
                        }
                      </select>
                  }
                </div>
            </div>
          </div>
          <button >Agendar cita</button>
        </form>
    </main>
  )
}

export default Citas