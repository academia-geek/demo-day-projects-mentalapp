import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import FooterChat from "../components/Servicios/Chat/FooterChat";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import Inicio from "../components/Inicio/Inicio";
import Servicios from "../components/Servicios/Servicios";
import Foro from "../components/Foro/Foro";
import Citas from "../components/Servicios/Citas/Citas";
import Chat from "../components/Servicios/Chat/Chat";
import Perfil from "../components/Perfil/Perfil";
import Tema from "../components/Foro/Tema";
import ElegirTema from "../components/Foro/ElegirTema";
import { useDispatch } from "react-redux";
import { listarCategoriasAsyn, listarTemaAsyn } from "../redux/actions/actionsForo";
import { loginSincrono } from "../../src/redux/actions/actionLogin";

export const AppRouter = () => {

   const [checking, setChecking] = useState(true);
   const [isLoggedIn, setIsLoggedIn] = useState(true);
   const [modalHome, setModalHome] = useState(true);
   const dispatch = useDispatch();

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user?.uid) {
            dispatch(loginSincrono(user.uid, user.displayName, user.email));
            setIsLoggedIn(true);
         } else {
            setIsLoggedIn(false);
         }

         setChecking(false);
      });

      dispatch(listarCategoriasAsyn());
      dispatch(listarTemaAsyn());

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch]);

   if (checking) {
      return (
         <div className="loader">
            <h3>Conectando con el servidor...</h3>
         </div>
      );
   }

   return (
      <BrowserRouter>
         <Navbar isLoggedIn={isLoggedIn} />
         <Routes>
            <Route
               path="/perfil"
               element={
                  <PrivateRouter isAuth={isLoggedIn}>
                     <Perfil />
                  </PrivateRouter>
               }
            />

            <Route
               path="/login"
               element={
                  <PublicRouter isAuth={isLoggedIn}>
                     <Login />
                  </PublicRouter>
               }
            />
            <Route path="/" element={<Inicio stateModal={[modalHome, setModalHome]} />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/foro" element={<ElegirTema />} />
            <Route path="/foro/:categoria" element={<Foro />} />
            <Route path="/foro/:categoria/:codigo" element={<Tema />} />
            <Route path="/chat" element={<Chat />} />
            <Route path='*' element={<Navigate to="/"/>} />
         </Routes>
         <FooterChat />
      </BrowserRouter>
   );
};
