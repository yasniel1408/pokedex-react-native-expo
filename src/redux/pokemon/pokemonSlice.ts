import { createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { getPokemons } from '../../api/pokemonsApi';
import { ThunkAPIType } from '../../types';

export const getPokemonsWithDetails = createAsyncThunk(
    'pokemon/getPokemonsWithDetails',
    async (_, { rejectWithValue, dispatch }: ThunkAPIType) => {
        try {
            dispatch(fetchPokemons(null));
            const results = await getPokemons();
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
        fetchPokemons: (state) => {
            state.loading = true;
            state.error = '';
        },
        setPokemons: (state, action: PayloadAction<any[]>) => {
            state.pokemons = action.payload;
            state.loading = false;
        },
        setFavorite: (state, action: PayloadAction<number>) => {
            const newArrPokes: any[] = state.pokemons;
            const index = newArrPokes.findIndex(({ id }: { id: number }) => id === action.payload);
            if (index >= 0) {
                newArrPokes[index].favorite = !newArrPokes[index].favorite;
            }
        },
        setError: (state, action: PayloadAction<any>) => {
            state.error = action.payload.message;
        },
    },
});

const { actions, reducer } = pokemonSlice;

export const { fetchPokemons, setPokemons, setFavorite, setError } = actions;

export default reducer;
