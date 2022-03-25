import { typesChat } from "../types/types";
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection, getDocs } from "@firebase/firestore";

// Cargar los mensajes en timepo real

export const listChatAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "chat"));
    const mensaje = [];
    querySnapshot.forEach((doc) => {
      mensaje.push({
        ...doc.data(),
      });
    });
    dispatch(listSync(mensaje));
  };
};

export const listSync = (mensaje) => {
  return {
    type: typesChat.list,
    payload: mensaje,
  };
};

// Enviar los mensajes

export const addNewMessage = (newMessage) => {
    return (dispatch) => {
      addDoc(collection(db, "chat"), newMessage) 
        .then((resp) => {
          dispatch(addMessageSync(newMessage));
          dispatch(listChatAsync());
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  export const addMessageSync = (mensaje) => {
    return {
      type: typesChat.add,
      payload: mensaje,
    };
  };