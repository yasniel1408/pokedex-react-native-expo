import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../hooks/hooks';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { PokemonInitialStateType } from '../../../types';
import { markAFavorite, setFavorites } from '../pokemonSlice';

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

    useEffect(() => {
        saveDataAtLocalStorage({ data: favorites });
    }, [favorites, saveDataAtLocalStorage]);

    useEffect(() => {
        dispatch(setFavorites(dataLocalStorage));
    }, [dataLocalStorage, dispatch]);

    const markAsFavorite = useCallback(
        ({ id }) => {
            dispatch(markAFavorite(id));
        },
        [dispatch],
    );

    return {
        saveDataAtLocalStorage,
        getLocalStorageData,
        dataLocalStorage,
        markAsFavorite,
        favorites,
    };
};

export default useFavorite;
