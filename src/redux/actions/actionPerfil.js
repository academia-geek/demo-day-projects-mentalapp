import { typesPost } from "../types/types";
import { db } from "../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";

// Añadir post

export const addPostAsync = (newPost) => {
  return (dispatch) => {
    addDoc(collection(db, "post"), newPost)
      .then((resp) => {
        dispatch(addPostSync(newPost));
        dispatch(listPostAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addPostSync = (product) => {
  return {
    type: typesPost.add,
    payload: product,
  };
};

// Listar

export const listPostAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "post"));
    const post = [];
    querySnapshot.forEach((doc) => {
      post.push({
        ...doc.data(),
      });
    });
    dispatch(listPostSync(post));
  };
};

export const listPostSync = (post) => {
  return {
    type: typesPost.list,
    payload: post,
  };
};

// Borrar

export const deletePostAsync = (descripcion) => {
  return async (dispatch) => {
    const estCollection = collection(db, "post");
    const q = query(estCollection, where("descripcion", "==", descripcion));

    const datos = await getDocs(q);
    datos.forEach((docu) => {
      deleteDoc(doc(db, "post", docu.id));
    });
    dispatch(deletePostSync(descripcion));
  };
};

export const deletePostSync = (descripcion) => {
  return {
    type: typesPost.delete,
    payload: descripcion,
  };
};
