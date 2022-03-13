import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetPokemons } from '../../redux/pokemon/hooks';
import PokedexScreenList from './components/PokedexScreenList';
import Error from '../../components/Error/Error';

const PokedexScreen = () => {
    const { getPokemons, pokemons, error } = useGetPokemons();

    useEffect(() => {
        !pokemons?.length && getPokemons();
    }, [getPokemons, pokemons?.length]);

    return (
        <SafeAreaView>
            <Error error={error} />
            <PokedexScreenList />
        </SafeAreaView>
    );
};

export default PokedexScreen;
