import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonsAPI } from '../../../api/pokemonsApi';
import { MyPokemonType, ThunkAPIType } from '../../../types';
import { fetchPokemons, setError, setPokemons } from '../pokemonSlice';

export const getPokemonsWithDetailsAction = createAsyncThunk(
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
