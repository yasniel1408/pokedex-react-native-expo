import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks';
import { PokemonInitialStateType } from '../../../types';
import { getPokemonsWithDetails } from '../pokemonSlice';

const useGetPokemons = () => {
    const { pokemons, loading, error }: PokemonInitialStateType = useSelector(
        ({ pokemon }: { pokemon: PokemonInitialStateType }) => pokemon,
    );
    const dispatch = useAppDispatch();
    const [offset, setOffset] = useState(0);
    const limit = 20;

    useEffect(() => {
        dispatch(getPokemonsWithDetails({ limit, offset }));
    }, [dispatch, limit, offset]);

    const loadMorePokemons = () => {
        setOffset(() => offset + 20);
    };

    return { loadMorePokemons, pokemons, loading, error };
};

export default useGetPokemons;
