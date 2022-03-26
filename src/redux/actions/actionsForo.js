import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesForo } from "../types/types";

/////// Elegir categoria ////////

export const listarCategoriasAsyn = () => {
   return async (dispatch) => {
      const traerDatos = await getDocs(collection(db, "categorias-foro"));
      const productos = [];
      traerDatos.forEach((doc) => {
         productos.push({
            ...doc.data(),
         });
      });
      dispatch(listarCategoriasSyn(productos));
   };
};

export const listarCategoriasSyn = (categorias) => {
   return {
      type: typesForo.listarCategorias,
      payload: categorias,
   };
};

///////// Tema //////////

export const agregarTemaAsyn = (newTema) => {
   return (dispatch) => {
      addDoc(collection(db, "foro"), newTema)
         .then((resp) => {
            dispatch(agregarTemaSyn(newTema));
         })
         .catch((error) => {
            console.log(error);
         });
   };
};

export const agregarTemaSyn = (newTema) => {
   return {
      type: typesForo.agregarTema,
      payload: newTema,
   };
};

export const listarTemaAsyn = () => {
   return async (dispatch) => {
      const traerDatos = await getDocs(collection(db, "foro"));
      const productos = [];
      traerDatos.forEach((doc) => {
         productos.push({
            ...doc.data(),
         });
      });
      dispatch(listarTemaSyn(productos));
   };
};

export const listarTemaSyn = (temas) => {
   return {
      type: typesForo.listarTema,
      payload: temas,
   };
};
