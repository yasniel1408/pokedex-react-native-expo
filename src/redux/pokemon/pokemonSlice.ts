import { createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { getPokemonByIdAPI, getPokemonsAPI } from '../../api/pokemonsApi';

import {
    DetailsOfPokemonType,
    MyPokemonType,
    PokemonInitialStateType,
    ThunkAPIType,
} from '../../types';

export const getPokemonsWithDetails = createAsyncThunk(
    'pokemon/getPokemonsWithDetails',
    async (
        {
            limit,
            offset,
        }: {
            limit?: number;
            offset?: number;
        },
        { rejectWithValue, dispatch, getState }: ThunkAPIType,
    ) => {
        const {
            pokemon: { pokemons },
        } = getState();
        try {
            dispatch(fetchPokemons(null));
            const newPokemons: MyPokemonType[] = await getPokemonsAPI({
                limit,
                offset,
            });
            dispatch(setPokemons([...pokemons, ...newPokemons]));
        } catch (error: any) {
            dispatch(setError(error.response.data));
            rejectWithValue(error.response.data);
        }
    },
);

export const getPokemonById = createAsyncThunk(
    'pokemon/getPokemonById',
    async ({ id }: { id: number }, { rejectWithValue, dispatch }: ThunkAPIType) => {
        try {
            dispatch(fetchPokemons(null));
            const pokemon: DetailsOfPokemonType = await getPokemonByIdAPI({ id });
            dispatch(setCurrentPokemons(pokemon));
        } catch (error: any) {
            dispatch(setError(error.response.data));
            rejectWithValue(error.response.data);
        }
    },
);

export const pokemonSlice: Slice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        currentPokemon: null,
        loading: false,
        error: '',
    },
    reducers: {
        fetchPokemons: (state: PokemonInitialStateType) => {
            state.loading = true;
            state.error = '';
        },
        setPokemons: (state: PokemonInitialStateType, action: PayloadAction<any[]>) => {
            state.pokemons = action.payload;
            state.loading = false;
        },
        setCurrentPokemons: (state: PokemonInitialStateType, action: PayloadAction<any[]>) => {
            state.currentPokemon = action.payload;
            state.loading = false;
        },
        setFavorite: (state: PokemonInitialStateType, action: PayloadAction<number>) => {
            const newArrPokes: any[] = state.pokemons;
            const index = newArrPokes.findIndex(({ id }: { id: number }) => id === action.payload);
            if (index >= 0) {
                newArrPokes[index].favorite = !newArrPokes[index].favorite;
            }
        },
        setError: (state: PokemonInitialStateType, action: PayloadAction<any>) => {
            state.error = action.payload.message;
        },
    },
});

const { actions, reducer } = pokemonSlice;

export const { fetchPokemons, setPokemons, setCurrentPokemons, setFavorite, setError } = actions;

export default reducer;
