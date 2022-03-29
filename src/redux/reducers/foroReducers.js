import { typesForo } from "../types/types";

const initialStateCategorias = {
   categorias: [],
};

const initialStateTemas = {
   temas: [],
};

export const categoriasReducer = (state = initialStateCategorias, action) => {
   switch (action.type) {
      case typesForo.listarCategorias:
         return {
            categorias: [...action.payload],
         };

      default:
         return state;
   }
};

export const foroReducer = (state = initialStateTemas, action) => {
   switch (action.type) {
      case typesForo.agregarTema:
         return {
            temas: [action.payload],
         };

      case typesForo.listarTema:
         return {
            temas: [...action.payload],
         };

      case typesForo.editarTema:
         return {
            ...state,
         };

      default:
         return state;
   }
};
