import { createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { getPokemonsWithDetailsAPI } from '../../api/pokemonsApi';
import { PokemonInitialStateType, PokemonType, ThunkAPIType } from '../../types';

const initialState: PokemonInitialStateType = {
    pokemons: [],
    loading: false,
    error: '',
};

export const pokemonSlice: Slice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action: PayloadAction<Array<PokemonType>>) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action: PayloadAction<number>) => {
            const newArrPokes: PokemonType[] = state.pokemons;
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

export const { setPokemons, setFavorite, setError, clearError, toggleLoading } = actions;

export const getPokemonsWithDetails = createAsyncThunk(
    'pokemon/getPokemonsWithDetails',
    async (_, { dispatch }: ThunkAPIType) => {
        try {
            console.log('OKOKOOKOKOK');
            dispatch(toggleLoading(null));
            const pokemonsWithDetails = await getPokemonsWithDetailsAPI();
            dispatch(setPokemons(pokemonsWithDetails));
            dispatch(toggleLoading(null));
        } catch (err) {
            dispatch(setError({ error: err, message: 'Error fetching pokemons' }));
            dispatch(toggleLoading(null));
        }
    },
);

export default reducer;
