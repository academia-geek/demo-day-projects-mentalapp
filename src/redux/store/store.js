import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { serviciosReducer } from '../reducers/serviciosReducer';
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  servicios: serviciosReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
