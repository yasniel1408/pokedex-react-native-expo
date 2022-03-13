import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from './hooks';
import { PokemonInitialStateType } from '../../../types';
import { getPokemonsWithDetailsAction } from '../pokemonSlice';

const useGetPokemons = () => {
    const { pokemons, loading, error }: PokemonInitialStateType = useSelector(
        ({ pokemon }: { pokemon: PokemonInitialStateType }) => pokemon,
    );
    const dispatch = useAppDispatch();
    const [offset, setOffset] = useState(0);
    const limit = 20;

    const getPokemons = useCallback(() => {
        dispatch(getPokemonsWithDetailsAction({ limit, offset }));
    }, [dispatch, limit, offset]);

    useEffect(() => {
        offset && getPokemons();
    }, [getPokemons, offset]);

    const loadMorePokemons = () => {
        setOffset(() => offset + 20);
    };

    return { getPokemons, loadMorePokemons, pokemons, loading, error };
};

export default useGetPokemons;
