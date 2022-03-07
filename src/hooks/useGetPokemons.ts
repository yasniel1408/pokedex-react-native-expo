import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemonsWithDetails } from '../redux/pokemon/pokemonSlice';
import PokemonInitialStateType from '../types/PokemonInitialStateType';

const useGetPokemons = () => {
    const { pokemons, loading, error }: PokemonInitialStateType = useSelector(
        ({ pokemon }: { pokemon: PokemonInitialStateType }) => pokemon,
    );

    useEffect(() => {
        getPokemonsWithDetails();
    }, []);

    return { pokemons, loading, error };
};

export default useGetPokemons;
