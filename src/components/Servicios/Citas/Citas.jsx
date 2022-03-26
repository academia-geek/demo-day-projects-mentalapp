import React, {useState, useEffect} from 'react';
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import {db} from '../../../firebase/firebaseConfig';
import { useSelector } from 'react-redux';
import { useForm } from '../../../hooks/useForm';

const Citas = () => {

  const [profesionales, setProfesionales] = useState([]);
  const [profesional, setProfesional] = useState("");
  const seleccion = profesionales.find((pro)=>(pro.id===profesional));
  const [cargando, setCargando] = useState(true);
  const {name, email} = useSelector((store) => store.user);
  const [alerta, setAlerta] = useState("");

  const [values, handleInputChange, reset] = useForm({
      nombre: name!==undefined ? name : "",
      correo: email!==undefined ? email : "",
      telefono: "",
      fecha: ""
  });

  const {nombre, correo, telefono, fecha} = values;

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

  };

  if(cargando){
    return(
      <div className='loader'>
        <h3>Cargando citas...</h3>
      </div>
    )
  }

  const handleSubmit = (e) => {

      e.preventDefault();
      if(profesional!==""){
          
          setAlerta("Agendando cita...")

          const profesionalActualizado = {
            ...seleccion,
            agenda: [...seleccion.agenda, fecha]
          }
          
          setDoc(doc(db, "profesionales", profesional), profesionalActualizado)
              .then(()=>{
                setAlerta(`Cita agendada correctamente para ${fecha}`);
                reset();
              })
              .catch((e)=>{
                  console.log(e);
                  setAlerta("No se pudo agendar la cita. Inténtalo de nuevo.")
              })

      } else{
          setAlerta("Selecciona un profesional");
      }

  }

  return (
    <main className='cntr-citas'>
        <h3>Cita con un profesional</h3>
        <form onSubmit={handleSubmit}>
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
                    <input
                        type ='text'
                        name = 'nombre'
                        value = {nombre}
                        onChange = {handleInputChange}
                        autoComplete = 'on'
                        placeholder='Ingresa tu nombre'
                        required
                    />
                </div>
                <div>
                    <label>Correo</label>
                    <input
                        type ='email'
                        name = 'correo'
                        value = {correo}
                        onChange = {handleInputChange}
                        autoComplete = 'on'
                        placeholder='Ingresa tu correo electrónico'
                        required
                    />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input
                        type ='number'
                        name = 'telefono'
                        value = {telefono}
                        onChange = {handleInputChange}
                        autoComplete = 'on'
                        placeholder='Ingresa tu teléfono'
                        required
                    />
                </div>
                <div>
                  {seleccion!==undefined &&
                      <select
                        name = 'fecha'
                        value = {fecha}
                        onChange = {handleInputChange} 
                        required                 
                      >
                        <option value=''>Seleccionar una fecha y hora</option>
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
        <div className={alerta===""? "d-none" : "alerta"}>
            <h6>{alerta}</h6>
        </div>
    </main>
  )
}

export default Citas