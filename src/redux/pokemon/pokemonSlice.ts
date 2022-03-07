/* eslint-disable max-len */
import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { ThunkAPIType } from '../../types';

// export const getPokemonsWithDetails: AsyncThunk<any[], void, {}> = createAsyncThunk(
//     'pokemon/getPokemonsWithDetails',
//     async (_, { rejectWithValue }: ThunkAPIType) => {
//         try {
//             const pokemonsWithDetails: any[] = await getPokemonsWithDetailsAPI();
//             return pokemonsWithDetails;
//         } catch (error: any) {
//             return rejectWithValue(error.response.data);
//         }
//     },
// );

export const pokemonSlice: Slice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        loading: false,
        error: '',
    },
    reducers: {
        fetchPokemons: (state, action: PayloadAction<any[]>) => {
            state.loading = true;
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
        clearError: (state) => {
            state.error = '';
        },
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
    },
});

const { actions, reducer } = pokemonSlice;

export const { fetchPokemons, setPokemons, setFavorite, setError, clearError, toggleLoading } =
    actions;

export default reducer;
