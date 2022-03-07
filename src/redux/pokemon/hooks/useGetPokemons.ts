import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons } from '../../../api/pokemonsApi';

import { useAppDispatch } from './hooks';
import { PokemonInitialStateType } from '../../../types';
import { setPokemons, fetchPokemons } from '../pokemonSlice';

const useGetPokemons = () => {
    const { pokemons, loading, error }: PokemonInitialStateType = useSelector(
        ({ pokemon }: { pokemon: PokemonInitialStateType }) => pokemon,
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        const load = async () => {
            dispatch(fetchPokemons(null));
            const {
                data: { results },
            } = await getPokemons();
            dispatch(setPokemons(results));
        };
        load();
    }, [dispatch]);

    return { pokemons, loading, error };
};

export default useGetPokemons;
