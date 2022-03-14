import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonByIdAPI } from '../../../api/pokemonsApi';
import { ThunkAPIType } from '../../../types';
import { fetchPokemons, setCurrentPokemons, setError } from '../pokemonSlice';

export const getPokemonByIdAction = createAsyncThunk(
    'pokemon/getPokemonById',
    async ({ id }: { id: number }, { rejectWithValue, dispatch }: ThunkAPIType) => {
        try {
            dispatch(fetchPokemons(null));
            const pokemon: any = await getPokemonByIdAPI({ id });
            dispatch(setCurrentPokemons(pokemon));
        } catch (error: any) {
            dispatch(setError(error.response.data));
            rejectWithValue(error.response.data);
        }
    },
);
