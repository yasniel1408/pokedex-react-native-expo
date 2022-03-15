import { Text } from 'react-native';
import React, { FC, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavorite } from '../../redux/pokemon/hooks';
import FavoriteScreenList from './components/FavoriteScreenList';

const FavoriteScreen: FC = () => {
    const { getLocalStorageData } = useFavorite();

    useEffect(() => {
        getLocalStorageData();
    }, [getLocalStorageData]);

    return (
        <SafeAreaView>
            <FavoriteScreenList />
        </SafeAreaView>
    );
};

export default FavoriteScreen;
