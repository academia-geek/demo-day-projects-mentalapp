import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Perfil from "../components/Perfil/Perfil";
import FooterChat from "../components/Servicios/Chat/FooterChat";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      <div>
        <h1> Conectando con el servidor... </h1>;
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
          path="/*"
          element={
            <PublicRouter isAuth={isLoggedIn}>
              <DashboardRoutes />
            </PublicRouter>
          }
        />
      </Routes>
      <FooterChat />
    </BrowserRouter>
  );
};
