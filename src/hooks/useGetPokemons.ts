import { fetchPokemons } from './../redux/slices/pokemonSlice';
import { useSelector } from 'react-redux';
import IStatePokemons from '../types/IStatePokemons';
import { useEffect } from 'react';

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