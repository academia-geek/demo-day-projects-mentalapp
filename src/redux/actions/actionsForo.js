import {
   addDoc,
   collection,
   doc,
   getDocs,
   orderBy,
   query,
   updateDoc,
   where,
} from "firebase/firestore";
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
            dispatch(listarTemaAsyn());
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
      //const q = query(traerDatos, orderBy("codigo", "desc"));
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

export const editarTemaAsyn = (codigo, tema) => {
   return async (dispatch) => {
      const traerCollection = collection(db, "foro");
      const q = query(traerCollection, where("codigo", "==", codigo));
      const datosQ = await getDocs(q);
      let id;
      datosQ.forEach(async (docu) => {
         id = docu.id;
      });
      console.log(id);

      const docRef = doc(db, "foro", id);
      await updateDoc(docRef, tema).then(() => listarTemaAsyn());
   };
};

export const editarTemaSyn = (codigo, tema) => {
   return {
      type: typesForo.editarTema,
      payload: tema,
   };
};
