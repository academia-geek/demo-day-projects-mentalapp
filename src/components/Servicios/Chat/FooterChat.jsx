import React from "react";
import { useNavigate } from "react-router-dom";

const FooterChat = () => {
  let navigate = useNavigate();

  const redChat = () => {
    navigate("/chat");
  };

  return (
    <>
      <div className="btn-chat">
        <button onClick={redChat}>Necesito ayuda</button>
      </div>
    </>
  );
};

export default FooterChat;
