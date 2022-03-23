import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../components/Inicio/Inicio"
import Login from "../components/Login/Login"
import Servicios from "../components/Servicios/Servicios"
import Navbar from "../components/Navbar/Navbar";
import Perfil from "../components/Perfil/Perfil";
import Citas from "../components/Servicios/Citas/Citas";
import Foro from "../components/Foro/Foro";
import Chat from "../components/Servicios/Chat/Chat";
import FooterChat from "../components/Servicios/Chat/FooterChat";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        console.log("Bien");
      } else {
        setIsLoggedIn(false);
        console.log("Mal");
      }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return (
      <div className="checking">
        <h1> Conectando con el servidor... </h1>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
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
