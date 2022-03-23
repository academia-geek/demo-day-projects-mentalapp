import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat/Chat";

const Servicios = () => {
  // Utilidades
  let navigate = useNavigate();

  // Redireccionar
  const redForo = () => {
    navigate("/foro");
  };
  const redCitas = () => {
    navigate("/citas");
  };
  const redChat = () => {
    navigate("/chat");
  };

  return (
    <>
      <div className="prin-serv">
        <h1>Elige el servicio que deseas usar</h1>
        <div className="categ">
          <div className="sec-pro">
            <h2>Contacto con un profesional</h2>
            <p>
              Aquí encontrarás la ayuda que necesites, cúando la necesites,
              sientete libre de elegir el momento indicado para hablar con uno
              de nuestro profesionales
            </p>
            <div>
              <button  onClick={redChat}>Quiero hablar con alguien ahora</button>
              <button onClick={redCitas}>Quiero que me contacten luego</button>
            </div>
          </div>
          <div className="sec-for">
            <h2>Foro</h2>
            <p>
              En esta sección encontrarás entradas de otros usuarios, podrás
              crear tus propios temas de conversación y compartir tus ideas con
              los demás.
            </p>
            <div>
              <button onClick={redForo}>Visitar el foro</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
