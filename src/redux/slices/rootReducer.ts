import { combineReducers } from "redux";
import pokemonReducer from "./pokemonSlice";

const rootReducer = combineReducers({
  pokemonReducer,
});

export default rootReducer;
