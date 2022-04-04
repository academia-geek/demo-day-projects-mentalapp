import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase/firebaseConfig";
import { orderBy } from "firebase/firestore";
import { useForm } from "../../../hooks/useForm";
import { addNewMessage } from "../../../redux/actions/actionChat";

const Chat = () => {
  const dispatch = useDispatch();

  const [mensajes, setMensajes] = useState([{ texto: "Cargando chat..." }]);

  useEffect(() => {
    const collectionRef = collection(db, "chat");
    const q = query(collectionRef, orderBy("fecha", "asc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setMensajes(snapshot.docs.map((doc) => doc.data()))
    );

    return unsub;
  }, []);

  const usuario = useSelector((store) => store.user);

  // Agregar mensaje al chat
  const [formValues, handleInputChange, reset] = useForm();

  const { texto } = formValues;

  const handleMessage = (e) => {
    e.preventDefault();
    dispatch(addNewMessage({ texto, uid, fecha }));
    reset();
  };

  let uid = usuario.id;
  let fecha = new Date();

  return (
    <>
      <div className="prin-chat">
        <h1>Chat con un profesional</h1>
        <div className="sec-mess">
          <div className="inter-chat">
            {mensajes.map((e, index) =>
              e.uid === usuario.id ? (
                <div className="text-sal" key={index}>
                  <p>{e.texto}</p>
                  <h5>Usuario</h5>
                </div>
              ) : (
                <div className="text-ent" key={index}>
                  <p>{e.texto}</p>
                  <h5>Profesional</h5>
                </div>
              )
            )}
          </div>
        </div>
        <div className="ent-chat">
          <form onSubmit={handleMessage}>
            <input
              type="texto"
              name="texto"
              value={texto}
              placeholder="Ingresa tu mensaje"
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
