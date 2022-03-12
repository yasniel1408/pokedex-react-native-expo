import { FlatList } from 'react-native';
import React from 'react';
import { MyPokemonType } from '../../../types';
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons }: { pokemons: MyPokemonType[] }) => {
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={({ id }: { id: number }) => `${id}`}
            renderItem={({ item }: { item: MyPokemonType }) => <PokemonItem item={item} />}
            contentContainerStyle={{ paddingHorizontal: 5 }}
        />
    );
};

export default PokemonList;
