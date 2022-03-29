import { types } from "../types/types";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        name: action.payload.displayname,
        email: action.payload.email,
      };
    case types.user:
    case types.logout:
      return {
        id: "user",
      };

    case types.register:
      return {
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
      };

    default:
      return state;
  }
};
