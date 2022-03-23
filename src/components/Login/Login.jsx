import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { logoFacebook, logoGoogle } from "../../media/imagenes";
import {
   loginEmailPassword,
   loginFacebook,
   loginGoogle,
   registroEmailPasswordNombre,
} from "../../redux/actions/actionLogin";
import { useDispatch } from "react-redux";

const Login = () => {
   const dispatch = useDispatch();

   const loginFormik = useFormik({
      initialValues: {
         email: "",
         pass: "",
         pass2: "",
      },
      validationSchema: Yup.object({
         email: Yup.string().email().required(),
         pass: Yup.string()
            .required()
            .oneOf([Yup.ref("pass2")]),
         pass2: Yup.string().required(),
      }),
      onSubmit: (data) => {
         console.log(data);

         const { email, pass } = data;
         dispatch(loginEmailPassword(email, pass));
      },
   });

   const signupFormik = useFormik({
      initialValues: {
         name: "",
         email: "",
         pass: "",
         pass2: "",
      },
      validationSchema: Yup.object({
         name: Yup.string().required(),
         email: Yup.string().email().required(),
         pass: Yup.string()
            .required()
            .oneOf([Yup.ref("pass2")]),
         pass2: Yup.string().required(),
      }),
      onSubmit: (data) => {
         console.log(data);

         const { name, email, pass } = data;

         dispatch(registroEmailPasswordNombre(email, pass, name));
      },
   });

   // Login Google

   const handleGoogle = () => {
      dispatch(loginGoogle());
   };

   const handleFacebook = () => {
      dispatch(loginFacebook());
   };

   return (
      <div className="login-container">
         <div className="login" style={{ borderRight: "1px solid lightgray" }}>
            <h3 className="title">Inicia sesión en tu cuenta</h3>
            <form onSubmit={loginFormik.handleSubmit}>
               <TextField
                  label="Correo electrónico"
                  variant="filled"
                  name="email"
                  onChange={loginFormik.handleChange}
               />
               <TextField
                  type="password"
                  label="Contraseña"
                  variant="filled"
                  name="pass"
                  onChange={loginFormik.handleChange}
               />
               <TextField
                  type="password"
                  label="Repite contraseña"
                  variant="filled"
                  name="pass2"
                  onChange={loginFormik.handleChange}
               />
               <Button type="submit" variant="contained">
                  Enviar
               </Button>
            </form>

            <div className="login-socialmedia">
               <button onClick={handleGoogle}>
                  <img src={logoGoogle} alt="" />
                  <span>Ingresa con Google</span>
               </button>
               <button onClick={handleFacebook}>
                  <img src={logoFacebook} alt="" />
                  <span>Ingresa con Facebook</span>
               </button>
            </div>
         </div>

         <div className="login" style={{ borderLeft: "1px solid lightgray" }}>
            <h3 className="title">Aún no tienes cuenta? Registrate</h3>
            <form onSubmit={signupFormik.handleSubmit}>
               <TextField
                  label="Nombre"
                  variant="filled"
                  name="name"
                  onChange={signupFormik.handleChange}
               />
               <TextField
                  label="Correo electrónico"
                  variant="filled"
                  name="email"
                  onChange={signupFormik.handleChange}
               />
               <TextField
                  type="password"
                  label="Contraseña"
                  variant="filled"
                  name="pass"
                  onChange={signupFormik.handleChange}
               />
               <TextField
                  type="password"
                  label="Repite contraseña"
                  variant="filled"
                  name="pass2"
                  onChange={signupFormik.handleChange}
               />
               <Button type="submit" variant="contained">
                  Enviar
               </Button>
            </form>
         </div>
      </div>
   );
};

export default Login;
