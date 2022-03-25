import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login"
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

export const AppRouter = () => {
   const [checking, setChecking] = useState(true);

   const [isLoggedIn, setIsLoggedIn] = useState(true);

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user?.uid) {
            setIsLoggedIn(true);
         } else {
            setIsLoggedIn(false);
         }
         setChecking(false);
      });
   }, []);

   if (checking) {
      return (
         <div className='loader'>
            <h3>Conectando con el servidor...</h3>
         </div>
      );
   }

   return (
      <BrowserRouter>
         <Navbar isLoggedIn={isLoggedIn}/>
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
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/foro" element={<Foro />} />
            <Route path="/chat" element={<Chat />} />
         </Routes>
         <FooterChat />
      </BrowserRouter>
   );
};
