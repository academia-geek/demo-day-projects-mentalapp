import React, { useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import AddIcon from "@mui/icons-material/Add";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";

const Foro = () => {
   const [agregarTema, setAgregarTema] = useState("agregar");
   const [ocultarTema, setOcultarTema] = useState("hidden");

   const mostrar = () => {
      setAgregarTema("hidden");
      setOcultarTema("ocultar");
   };

   const ocultar = () => {
      setAgregarTema("agregar");
      setOcultarTema("hidden");
   };

   const formik = useFormik({
      initialValues: {
         title: "",
         content: "",
      },
      onSubmit: (data) => {
         console.log(data);
      },
   });

   return (
      <div className="cont--foro">
         <div className="foro--titulo">
            <h1>Ansiedad</h1>
            <span>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet
               blanditiis repellat, nostrum ut adipisci.
            </span>
         </div>

         <div className="foro">
            <div className="foro---main">
               <h3>Últimos temas de conversación</h3>

               <div className="foro--cards">
                  <div className="card">
                     <div className="card--info">
                        <h2>Lorem ipsum</h2>
                        <span>
                           Escrito por: <b>Anónimo</b>
                        </span>
                     </div>
                     <div className="card--comment">
                        <CommentIcon />
                        <span>10 comentarios</span>
                     </div>
                  </div>
                  <div className="card">
                     <div className="card--info">
                        <h2>Lorem ipsum</h2>
                        <span>
                           Escrito por: <b>Anónimo</b>
                        </span>
                     </div>
                     <div className="card--comment">
                        <CommentIcon />
                        <span>10 comentarios</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="foro--agregar">
               <button className={agregarTema} onClick={mostrar}>
                  <AddIcon />
                  Agregar tema
               </button>

               <div className={ocultarTema}>
                  <button className="regresar" onClick={ocultar}>
                     Cancelar
                  </button>

                  <form onSubmit={formik.handleSubmit}>
                     <TextField
                        label="Titulo"
                        variant="outlined"
                        name="title"
                        onChange={formik.handleChange}
                     />
                     <TextField
                        label="Contenido"
                        multiline
                        rows={15}
                        name="content"
                        onChange={formik.handleChange}
                     />
                     <Button type="submit" variant="contained" color="success">
                        Enviar
                     </Button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Foro;
