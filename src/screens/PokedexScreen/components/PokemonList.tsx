import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { MyPokemonType } from '../../../types';
import PokemonItem from './PokemonItem';
import { useGetPokemons } from '../../../redux/pokemon/hooks';
import Loading from '../../../components/Loading/Loading';

const PokemonList = () => {
    const { loadMorePokemons, pokemons, loading } = useGetPokemons();

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator
            keyExtractor={({ id }: { id: number }) => `${id}`}
            renderItem={({ item }: { item: MyPokemonType }) => <PokemonItem item={item} />}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            onEndReached={loadMorePokemons}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<Loading loading={loading} />}
        />
    );
};

export default PokemonList;

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    },
});
