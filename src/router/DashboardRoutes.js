import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../components/Inicio/Inicio"
import Servicios from "../components/Servicios/Servicios";
import Foro from "../components/Foro/Foro";
import Citas from "../components/Servicios/Citas/Citas";
import Chat from "../components/Servicios/Chat/Chat";
import Login from "../components/Login/Login";
import Perfil from "../components/Perfil/Perfil";


export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/foro" element={<Foro />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </>
  );
};
