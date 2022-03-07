import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemonsWithDetailsAPI } from '../../../api/pokemonsApi';
import { useAppDispatch } from './hooks';
import { PokemonInitialStateType } from '../../../types';
import { setPokemons, toggleLoading } from '../pokemonSlice';

const useGetPokemons = () => {
    const { pokemons, loading, error }: PokemonInitialStateType = useSelector(
        ({ pokemon }: { pokemon: PokemonInitialStateType }) => pokemon,
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        const load = async () => {
            dispatch(toggleLoading(null));
            const pokemonsWithDetails: any[] = await getPokemonsWithDetailsAPI();
            console.log(pokemonsWithDetails);
            dispatch(setPokemons(pokemonsWithDetails));
            dispatch(toggleLoading(null));
        };
        load();
    }, [dispatch]);

    return { pokemons, loading, error };
};

export default useGetPokemons;
