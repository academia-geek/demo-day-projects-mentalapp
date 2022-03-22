import React, { useState } from "react";
import Chat from "./Chat/Chat";

const Servicios = () => {
  const [modal, setModal] = useState(false);

  const openChat = () => {
    setModal(true);
  };

  const closeChat = () => {
    setModal(false);
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
              <button>Quiero hablar con alguien ahora</button>
              <button>Quiero que me contacten luego</button>
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
              <button>Visitar el foro</button>
            </div>
          </div>
          <div className="sec-chat">
            <button onClick={() => openChat()}>Chat con un profesional</button>
          </div>
          {modal === true ? (
            <div>
              <Chat />
              <button className="btn-close" onClick={() => closeChat()}>Cerrar</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Servicios;
