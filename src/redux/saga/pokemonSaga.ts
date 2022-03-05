import { call, put, takeEvery } from "redux-saga/effects";
import { getPokemonsWithDetailsAPI } from "../../api/pokemonsApi";
import { setError, setPokemons, toggleLoading } from "../slices/pokemonSlice";

function* getPokemonsWithDetails() {
  try {
    yield put(toggleLoading());
    const dataPokemonsWithDetails: [] = yield call(getPokemonsWithDetailsAPI);
    yield put(setPokemons(dataPokemonsWithDetails));
  } catch (error: any) {
    yield put(setError(error));
    yield put(toggleLoading());
  }
  yield put(toggleLoading());
}

function* pokemonSaga() {
  yield takeEvery("GET_POKEMONS_WITH_DETAILS", getPokemonsWithDetails);
}

export default pokemonSaga;
