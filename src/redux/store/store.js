import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { categoriasReducer, foroReducer } from "../reducers/foroReducers";
import { loginReducer } from "../reducers/loginRedcuer";

const composeEnhancers =
   (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
   servicios: loginReducer,
   categorias: categoriasReducer,
   foro: foroReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
