import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase/firebaseConfig";
import { orderBy } from "firebase/firestore";
import { useForm } from "../../../hooks/useForm";
import {
  addNewMessage,
  listChatAsync,
} from "../../../redux/actions/actionChat";

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
  const [formValues, handleInputChange, reset] = useForm({
    text: "text",
    uid: usuario.id,
  });

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
            <button>
              <svg
                width="20"
                height="22"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.533 0.775662C17.4171 0.679485 17.2763 0.61821 17.127 0.598977C16.9777 0.579744 16.826 0.603344 16.6895 0.667029L0.317856 8.35156V9.83851L7.1943 12.5891L11.6051 19.375H13.0923L17.7916 1.58594C17.8297 1.44025 17.8256 1.28674 17.7798 1.14329C17.734 0.999833 17.6484 0.87234 17.533 0.775662ZM12.1741 17.9568L8.38282 12.1238L14.2169 5.7339L13.2938 4.89109L7.41407 11.3308L1.74442 9.06297L16.332 2.21562L12.1741 17.9568Z"
                  fill="#3957ed"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
