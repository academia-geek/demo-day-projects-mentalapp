import React, { useState } from "react";

const Chat = () => {
  return (
    <>
      <div className="prin-chat">
        <h2>Chat con un profesional</h2>
        <div>
          <p className="text-ent">Hola, ¿cómo te encuentras hoy?</p>
          <p className="text-sal">Hola, buenos días</p>
        </div>
        <div className="ent-chat">
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default Chat;
