import { types } from "../types/types";

export const serviciosReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        name: action.payload.displayname,
      };
    default:
      return state;
  }
};