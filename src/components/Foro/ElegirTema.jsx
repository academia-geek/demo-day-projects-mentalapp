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
      <div className="cont-elegir">
         <Link className="categoria" to="/foro/ansiedad">
            <div>Ansiedad</div>
         </Link>
         <Link className="categoria" to="/foro/depresion">
            <div>Depresión</div>
         </Link>
         <Link className="categoria" to="/foro/impostor">
            <div>Sindrome del impostor</div>
         </Link>
      </div>
   );
};

export default ElegirTema;
