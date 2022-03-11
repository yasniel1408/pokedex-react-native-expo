import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { PokemonInitialStateType } from '../../../types';
import { getPokemonsWithDetails } from '../pokemonSlice';

const useGetPokemons = () => {
    const { pokemons, loading, error }: PokemonInitialStateType = useSelector(
        ({ pokemon }: { pokemon: PokemonInitialStateType }) => pokemon,
    );
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getPokemonsWithDetails());
    }, [dispatch]);

    return { pokemons, loading, error };
};

export default useGetPokemons;
