import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

import { MyPokemonType, PokemonInitialStateType } from '../../types';

export const pokemonSlice: Slice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [] as MyPokemonType[],
        favorites: [] as MyPokemonType[],
        currentPokemon: null as any,
        loading: false as boolean,
        error: '' as string,
    },
    reducers: {
        fetchPokemons: (state: PokemonInitialStateType) => {
            state.loading = true;
            state.currentPokemon = null;
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
        setFavorites: (state: PokemonInitialStateType, action: PayloadAction<MyPokemonType[]>) => {
            state.favorites = action.payload;
        },
        setError: (state: PokemonInitialStateType, action: PayloadAction<any>) => {
            state.error = action.payload.message;
        },
    },
});

const { actions, reducer } = pokemonSlice;

export const { fetchPokemons, setPokemons, setCurrentPokemons, setFavorites, setError } = actions;

export default reducer;
