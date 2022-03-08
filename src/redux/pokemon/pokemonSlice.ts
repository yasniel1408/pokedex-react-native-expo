import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { getPokemonDetailsByUrlAPI, getPokemonsAPI } from '../../api/pokemonsApi';

import {
    DetailsOfPokemonType,
    PokemonInitialStateType,
    PokemonType,
    ThunkAPIType,
} from '../../types';

export const getPokemonsWithDetails: AsyncThunk<any, ThunkAPIType, any> = createAsyncThunk(
    'pokemon/getPokemonsWithDetails',
    async (_, { rejectWithValue, dispatch }: ThunkAPIType) => {
        try {
            dispatch(fetchPokemons(null));
            const pokemons: PokemonType[] = await getPokemonsAPI({});
            const results = pokemons.map(async ({ url }: { url: string }) => {
                const data = await getPokemonDetailsByUrlAPI({ url });
                return data;
            });
            console.log(results);
            dispatch(setPokemons(results));
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

export const { fetchPokemons, setPokemons, setFavorite, setError } = actions;

export default reducer;
