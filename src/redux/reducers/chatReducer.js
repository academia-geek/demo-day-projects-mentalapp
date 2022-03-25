import { typesChat } from "../types/types";

const initialState = {
  mensajes: [],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesChat.list:
      return {
        mensajes: [...action.payload],
      };
    case typesChat.add:
      return {
        mensajes: [action.payload],
      };
    default:
      return state;
  }
};
