import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useGetPokemonById from '../../redux/pokemon/hooks/useGetPokemonById';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import PokemonScreenHeader from './components/PokemonScreenHeader';
import PokemonScreenType from './components/PokemonScreenType';

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
            {loading ? (
                <Loading loading={loading} />
            ) : (
                <>
                    <PokemonScreenHeader />
                    <PokemonScreenType />
                </>
            )}
        </SafeAreaView>
    );
};

export default PokemonScreen;
