import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listarCategoriasAsyn } from "../../redux/actions/actionsForo";

const ElegirTema = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(listarCategoriasAsyn());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <main className="main-elegir">
         <img
            src="https://res.cloudinary.com/dcane9asx/image/upload/v1648597589/undraw_forming_ideas_re_2afc_yjk0kj.svg"
            alt=""
         />
         <div className="cont-elegir">
            <Link className="categoria" to="/foro/ansiedad">
               <div className="elegir-tema">
                  <h4>¿Te sientes frecuentemente nervioso, agitado o tenso, sin razón aparente?</h4>
                  <p>Puedes consultar nuestro foro sobre ansiedad</p>
               </div>
            </Link>
            <Link className="categoria" to="/foro/depresion">
               <div className="elegir-tema">
                  <h4>¿Te sientes constantemente desmotivado, triste y sin energía?</h4>
                  <p>Puedes consultar nuestro foro sobre depresión</p>
               </div>
            </Link>
            <Link className="categoria" to="/foro/impostor">
               <div className="elegir-tema">
                  <h4>
                     ¿Sientes que no eres capaz de hacer tu trabajo y no mereces estar donde estás?
                  </h4>
                  <p>Puedes consultar nuestro foro sobre síndrome del impostor</p>
               </div>
            </Link>
         </div>
      </main>
   );
};

export default ElegirTema;
