import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetPokemons } from '../../redux/pokemon/hooks';
import PokemonList from './components/PokemonList';
import Error from '../../components/Error/Error';

const PokedexScreen = () => {
    const { error } = useGetPokemons();

    return (
        <SafeAreaView>
            <Error error={error} />
            <PokemonList />
        </SafeAreaView>
    );
};

export default PokedexScreen;
