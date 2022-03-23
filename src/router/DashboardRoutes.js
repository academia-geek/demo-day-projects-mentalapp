import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"
import Inicio from "../components/Inicio/Inicio"
import Servicios from "../components/Servicios/Servicios";
import Foro from "../components/Foro/Foro";
import Citas from "../components/Servicios/Citas/Citas";
import Perfil from "../components/Perfil/Perfil";
import FooterChat from "../components/Servicios/Chat/FooterChat";
import Chat from "../components/Servicios/Chat/Chat";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/foro" element={<Foro />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
      <FooterChat />
    </>
  );
};
