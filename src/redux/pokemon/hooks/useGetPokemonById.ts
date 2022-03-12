import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { PokemonInitialStateType } from '../../../types';
import { getPokemonById } from '../pokemonSlice';

const useGetPokemonById = ({ id }: { id: number }) => {
    const { currentPokemon, loading, error }: PokemonInitialStateType = useSelector(
        ({ pokemon }: { pokemon: PokemonInitialStateType }) => pokemon,
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemonById({ id }));
    }, [dispatch, id]);

    return { currentPokemon, loading, error };
};

export default useGetPokemonById;
