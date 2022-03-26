import { TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Tema = () => {
   const { categoria, codigo } = useParams();

   //console.log(categoria + " + " + codigo);

   const { temas } = useSelector((store) => store.foro);

   const temaSelected = temas.find((t) => t.codigo === Number(codigo));

   console.log(temaSelected);

   return (
      <div className="cont--tema">
         <div className="tema">
            <h1>{temaSelected.nombre}</h1>
            <span>Escrito por: anónimo</span>
            <p>{temaSelected.descripcion}</p>
         </div>
         <div className="tema--respuestas">
            <div className="respuestas--anadir">
               <span>Añade un comentario:</span>
               <TextField label="Comentario" multiline rows={4} />
            </div>

            <div className="respuestas">
               <div className="respuesta--card">
                  <span>Anónimo</span>
                  <span>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nemo fuga quasi
                     fugit esse saepe facilis dolore laborum sequi! Autem.
                  </span>
               </div>
               <div className="respuesta--card">
                  <span>Anónimo</span>
                  <span>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nemo fuga quasi
                     fugit esse saepe facilis dolore laborum sequi! Autem.
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Tema;
