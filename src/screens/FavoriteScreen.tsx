import { Text } from 'react-native';
import React, { FC, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFavorite } from '../redux/pokemon/hooks';

const FavoriteScreen: FC = () => {
    const { getLocalStorageData, favorites } = useFavorite();

    useEffect(() => {
        getLocalStorageData();
    }, [getLocalStorageData]);

    return (
        <SafeAreaView>
            <Text>{JSON.stringify(favorites)}</Text>
        </SafeAreaView>
    );
};

export default FavoriteScreen;
