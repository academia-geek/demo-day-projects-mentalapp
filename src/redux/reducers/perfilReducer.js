import { typesPost } from "../types/types";

const initialState = {
  publicaciones: [],
};

export const perfilReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesPost.list:
      return {
        publicaciones: [...action.payload],
      };
    case typesPost.add:
      return {
        publicaciones: [action.payload],
      };
    case typesPost.delete:
      return {
        publicaciones: state.publicaciones.filter(
          (emp) => emp.descripcion !== action.payload
        ),
      };

    default:
      return state;
  }
};
