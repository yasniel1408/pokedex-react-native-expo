import { FlatList, Platform, StyleSheet } from 'react-native';
import React from 'react';
import { MyPokemonType } from '../../../types';
import PokedexScreenItem from './PokedexScreenItem';
import { useGetPokemons } from '../../../redux/pokemon/hooks';
import Loading from '../../../components/Loading/Loading';

const PokedexScreenList = () => {
    const { loadMorePokemons, pokemons, loading } = useGetPokemons();

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator
            keyExtractor={({ id }: { id: number }) => `${id}`}
            renderItem={({ item }: { item: MyPokemonType }) => <PokedexScreenItem item={item} />}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            onEndReached={() => loadMorePokemons()}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<Loading loading={loading} />}
        />
    );
};

export default PokedexScreenList;

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 90 : 60,
    },
});
