import React, { useEffect, useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import AddIcon from "@mui/icons-material/Add";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { agregarTemaAsyn } from "../../redux/actions/actionsForo";

const Foro = () => {
   const dispatch = useDispatch();

   const { categorias } = useSelector((store) => store.categorias);
   const { temas } = useSelector((store) => store.foro);
   const user = useSelector((store) => store.user);
   const { categoria } = useParams();

   const temasFiltered = temas.filter((t) => t.categoria === categoria);

   console.log(Object.keys(user).length);

   const [categoriaSelected] = categorias.filter((u) => u.llave === categoria);

   //console.log(categoriaSelected);

   const [agregarTema, setAgregarTema] = useState("agregar");
   const [ocultarTema, setOcultarTema] = useState("hidden");

   const [auth, setAuth] = useState("hidden");
   const [noauth, setNoauth] = useState("hidden");

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
         const { title, content } = data;

         const nuevoTema = {
            usuario: user.name,
            codigo: Date.now(),
            nombre: title,
            descripcion: content,
            categoria: categoria,
            comentarios: [],
         };

         //console.log(nuevoTema);

         dispatch(agregarTemaAsyn(nuevoTema));

         formik.handleReset();
      },
   });

   useEffect(() => {
      if (Object.keys(user).length !== 0) {
         setAuth("auth");
         setNoauth("hidden");
      } else {
         setAuth("hidden");
         setNoauth("noauth");
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (categoriaSelected === undefined) {
      return (
         <div className="loader">
            <h2>Cargando foro...</h2>
         </div>
      );
   }

   return (
      <div className="cont--foro">
         <div className="foro--titulo">
            <h1>{categoriaSelected.nombre}</h1>
            <span>{categoriaSelected.descripcion}</span>
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
                  {temasFiltered.map((t, index) => (
                     <Link to={"/foro/" + categoria + "/" + t.codigo} className="card" key={index}>
                        <div className="card--info">
                           <h2>{t.nombre}</h2>
                           <span>
                              Escrito por: <b>{t.usuario}</b>
                           </span>
                        </div>
                        <div className="card--comment">
                           <CommentIcon />
                           <span>{Object.keys(t.comentarios).length} comentarios</span>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>

            <div className="foro--agregar">
               <div className={auth}>
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
               <div className={noauth}>
                  <h3>Inicia sesión para aportar a esta conversación.</h3>
                  <Link to="/login">
                     <button>Inicia sesión</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Foro;
