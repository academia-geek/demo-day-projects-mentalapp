import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Servicios from "../components/Servicios/Servicios";
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
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter isAuth={isLoggedIn}>
              <Login />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter isAuth={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRouter>
          }
        />

        <Route
          path="/servicios"
          element={
            <PublicRouter isAuth={isLoggedIn}>
              <Servicios />
            </PublicRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
