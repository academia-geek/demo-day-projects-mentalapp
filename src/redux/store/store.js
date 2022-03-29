import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { categoriasReducer, foroReducer } from "../reducers/foroReducers";
import { loginReducer } from "../reducers/loginRedcuer";
import { chatReducer } from "../reducers/chatReducer";
import { perfilReducer } from "../reducers/perfilReducer";

const composeEnhancers =
   (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
   categorias: categoriasReducer,
   foro: foroReducer,
   user: loginReducer,
   mensajes: chatReducer,
   publicaciones: perfilReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
