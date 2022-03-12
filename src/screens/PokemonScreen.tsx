import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useGetPokemonById from '../redux/pokemon/hooks/useGetPokemonById';
import Error from '../components/Error/Error';
import Loading from '../components/Loading/Loading';

const PokemonScreen = ({
    route: {
        params: { id },
    },
}: {
    route: any;
}) => {
    const { currentPokemon, loading, error } = useGetPokemonById({ id });

    return (
        <SafeAreaView>
            <Error error={error} />
            <Loading loading={loading} />
            <Text>{JSON.stringify(currentPokemon)}</Text>
        </SafeAreaView>
    );
};

export default PokemonScreen;

const styles = StyleSheet.create({});
