import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetPokemons } from '../redux/pokemon/hooks';

const PokedexScreen = () => {
    const { pokemons, loading, error } = useGetPokemons();

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {loading && <Text>Loading...</Text>}
            <ScrollView>
                <Text>{JSON.stringify(pokemons)}</Text>
            </ScrollView>
            <Text>{JSON.stringify(error)}</Text>
        </SafeAreaView>
    );
};

export default PokedexScreen;

const styles = StyleSheet.create({});
