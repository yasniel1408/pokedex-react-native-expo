import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetPokemons } from '../redux/pokemon/hooks';

const PokedexScreen = () => {
    const { pokemons, loading, error } = useGetPokemons();

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {loading && <Text>Loading...</Text>}
            <Text>{JSON.stringify(pokemons)}</Text>
            <Text>Home Screen</Text>
        </SafeAreaView>
    );
};

export default PokedexScreen;

const styles = StyleSheet.create({});
