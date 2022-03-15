import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { PokemonInitialStateType } from '../../../types';
import { getPokemonByIdAction } from '../actions/getPokemonByIdAction';

const useGetPokemonById = () => {
    const { currentPokemon, loading, error }: PokemonInitialStateType = useSelector(
        ({ pokemon }: { pokemon: PokemonInitialStateType }) => pokemon,
    );
    const dispatch = useAppDispatch();

    const getPokemonById = useCallback(
        ({ id }: { id?: number }) => {
            id && dispatch(getPokemonByIdAction({ id }));
        },
        [dispatch],
    );

    return { getPokemonById, currentPokemon, loading, error };
};

export default useGetPokemonById;
