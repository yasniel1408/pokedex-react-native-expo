import { logActions } from "./middlewares/logActions";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { reportError } from "./middlewares/reportError";
import rootReducer from "./slices/rootReducer";
import pokemonSaga from "./saga/pokemonSaga";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, logActions, reportError)
    )
  );
};

sagaMiddleware.run(pokemonSaga);

export default configureStore;
