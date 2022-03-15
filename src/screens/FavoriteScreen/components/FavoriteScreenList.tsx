import { FlatList, Platform, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { MyPokemonType } from '../../../types';
import PokedexScreenItem from './FavoriteScreenItem';
import { useFavorite } from '../../../redux/pokemon/hooks';

const FavoriteScreenList: FC = () => {
    const { favorites } = useFavorite();

    return (
        <FlatList
            data={favorites}
            numColumns={1}
            showsVerticalScrollIndicator
            keyExtractor={({ id }: { id: number }) => `${id}`}
            renderItem={({ item }: { item: MyPokemonType }) => <PokedexScreenItem item={item} />}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            onEndReachedThreshold={0.1}
        />
    );
};

export default FavoriteScreenList;

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 90 : 60,
    },
});
