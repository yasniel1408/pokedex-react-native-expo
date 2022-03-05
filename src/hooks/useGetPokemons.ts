import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemons } from '../redux/slices/pokemonSlice';
import IStatePokemons from '../types/IStatePokemons';

const useGetPokemons = () => {
    const { pokemons, loading, error }: IStatePokemons = useSelector(
        (state: any) => state.pokemonReducer,
    );

    useEffect(() => {
        fetchPokemons();
    }, []);

    return { pokemons, loading, error };
};

export default useGetPokemons;
