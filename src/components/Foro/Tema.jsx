import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { editarTemaAsyn, listarTemaAsyn } from "../../redux/actions/actionsForo";

const Tema = () => {
   const dispatch = useDispatch();
   const { codigo } = useParams();

   const { temas } = useSelector((store) => store.foro);
   const user = useSelector((store) => store.user);

   const temaSelected = temas.find((t) => t.codigo === Number(codigo));

   const formik = useFormik({
      initialValues: {
         name: user.name,
         comment: "",
      },
      onSubmit: (data) => {
         const nuevoComentario = {
            name: data.name,
            comment: data.comment,
         };

         const temaEditado = {
            codigo: temaSelected.codigo,
            nombre: temaSelected.nombre,
            descripcion: temaSelected.descripcion,
            categoria: temaSelected.categoria,
            comentarios: temaSelected.comentarios,
         };

         const { comentarios } = temaEditado;

         comentarios.push(nuevoComentario);

         dispatch(editarTemaAsyn(temaEditado.codigo, temaEditado));
         dispatch(listarTemaAsyn());
      },
   });

   if (temaSelected === undefined) {
      return (
         <div className="loader">
            <h2>Cargando tema...</h2>
         </div>
      );
   }

   return (
      <div className="cont--tema">
         <div className="tema">
            <h1>{temaSelected.nombre}</h1>
            <span>Escrito por: {temaSelected.usuario}</span>
            <p>{temaSelected.descripcion}</p>
         </div>
         <div className="tema--respuestas">
            <div className="respuestas--anadir">
               <span>Añade un comentario:</span>
               <form onSubmit={formik.handleSubmit}>
                  <TextField
                     label="Comentario"
                     multiline
                     rows={4}
                     name="comment"
                     onChange={formik.handleChange}
                  />
                  <button type="submit">Enviar</button>
               </form>
            </div>

            <div className="respuestas">
               <div className="respuesta--card">
                  <span>Anónimo</span>
                  <span>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nemo fuga quasi
                     fugit esse saepe facilis dolore laborum sequi! Autem.
                  </span>
               </div>
               {temaSelected.comentarios.map((c, index) => (
                  <div className="respuesta--card" key={index}>
                     <span>{c.name}</span>
                     <span>{c.comment}</span>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Tema;
