import React, { useState } from "react";

const Chat = () => {
  return (
    <>
      <div className="prin-chat">
        <h1>Chat con un profesional</h1>
        <div className="inter-chat">
          <div className="text-ent">
            <p>Hola, ¿cómo te encuentras hoy?</p>
            <h5>Profesional</h5>
          </div>
          <div className="text-sal">
            <p>Hola, buenos días</p>
            <h5>Usuario</h5>
          </div>
        </div>
        <div className="ent-chat">
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default Chat;
