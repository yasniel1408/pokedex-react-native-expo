import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetPokemons } from '../../redux/pokemon/hooks';
import PokemonList from './components/PokemonList';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const PokedexScreen = () => {
    const { pokemons, loading, error } = useGetPokemons();

    return (
        <SafeAreaView>
            <Error error={error} />
            <Loading loading={loading} />
            <PokemonList pokemons={pokemons} />
        </SafeAreaView>
    );
};

export default PokedexScreen;
