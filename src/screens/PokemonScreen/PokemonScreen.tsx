import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useGetPokemonById from '../../redux/pokemon/hooks/useGetPokemonById';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import PokemonScreenHeader from './components/PokemonScreenHeader';

const PokemonScreen = ({
    route: {
        params: { id },
    },
}: {
    route: any;
}) => {
    const { getPokemonById, loading, error } = useGetPokemonById();

    useEffect(() => {
        getPokemonById({ id });
    }, [getPokemonById, id]);

    return (
        <SafeAreaView>
            <Error error={error} />
            <Loading loading={loading} />
            <PokemonScreenHeader />
        </SafeAreaView>
    );
};

export default PokemonScreen;
