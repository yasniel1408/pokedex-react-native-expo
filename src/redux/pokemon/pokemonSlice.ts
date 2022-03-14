import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

import { MyPokemonType, PokemonInitialStateType } from '../../types';

export const pokemonSlice: Slice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [] as MyPokemonType[],
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
        setFavorite: (state: PokemonInitialStateType, action: PayloadAction<number>) => {
            // const newArrPokes: any[] = state.pokemons;
            // eslint-disable-next-line max-len
            // const index = newArrPokes.findIndex(({ id }: { id: number }) => id === action.payload);
            // if (index >= 0) {
            //     newArrPokes[index].favorite = !newArrPokes[index].favorite;
            // }
        },
        setError: (state: PokemonInitialStateType, action: PayloadAction<any>) => {
            state.error = action.payload.message;
        },
    },
});

const { actions, reducer } = pokemonSlice;

export const { fetchPokemons, setPokemons, setCurrentPokemons, setFavorite, setError } = actions;

export default reducer;
