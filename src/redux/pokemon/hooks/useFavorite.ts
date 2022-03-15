import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../hooks/hooks';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { PokemonInitialStateType } from '../../../types';
import { setFavorite } from '../pokemonSlice';

const useFavorite = () => {
    const {
        saveDataAtLocalStorage,
        getLocalStorageData,
        data: dataLocalStorage,
    }: {
        saveDataAtLocalStorage: Function;
        getLocalStorageData: Function;
        data: any;
    } = useLocalStorage({
        key: '@FAVORITES',
    });
    const { favorites }: PokemonInitialStateType = useSelector(
        ({ pokemon }: { pokemon: PokemonInitialStateType }) => pokemon,
    );
    const dispatch = useAppDispatch();

    const markAsFavorite = useCallback(() => {
        dispatch(setFavorite(1));
    }, [dispatch]);

    return {
        saveDataAtLocalStorage,
        getLocalStorageData,
        dataLocalStorage,
        markAsFavorite,
        favorites,
    };
};

export default useFavorite;
