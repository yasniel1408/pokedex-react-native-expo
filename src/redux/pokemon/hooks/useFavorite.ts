import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../hooks/hooks';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { MyPokemonType, PokemonInitialStateType } from '../../../types';
import { setFavorites } from '../pokemonSlice';

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
    const { favorites, pokemons }: PokemonInitialStateType = useSelector(
        ({ pokemon }: { pokemon: PokemonInitialStateType }) => pokemon,
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (dataLocalStorage) dispatch(setFavorites(dataLocalStorage));
    }, [dataLocalStorage, dispatch]);

    const markAsFavorite = useCallback(
        ({ id: idPokemon }) => {
            const pokemon: MyPokemonType | undefined = pokemons?.find(
                ({ id }: { id: number }) => id === idPokemon,
            );
            const newArrayFavorites = [...favorites, pokemon];
            saveDataAtLocalStorage({ data: newArrayFavorites });
            dispatch(setFavorites(newArrayFavorites));
        },
        [dispatch, favorites, pokemons, saveDataAtLocalStorage],
    );

    const removeAsFavorite = useCallback(
        ({ id: idPokemon }) => {
            const newArrayFavorites: MyPokemonType[] = favorites?.filter(
                ({ id }: { id: number }) => id !== idPokemon,
            );
            saveDataAtLocalStorage({ data: newArrayFavorites });
            dispatch(setFavorites(newArrayFavorites));
        },
        [dispatch, favorites, saveDataAtLocalStorage],
    );

    return {
        getLocalStorageData,
        markAsFavorite,
        removeAsFavorite,
        favorites,
    };
};

export default useFavorite;
