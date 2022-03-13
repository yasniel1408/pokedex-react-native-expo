import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import useGetPokemonById from '../../redux/pokemon/hooks/useGetPokemonById';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import PokemonScreenHeader from './components/PokemonScreenHeader';
import PokemonScreenType from './components/PokemonScreenType';
import styles from './styles';

const PokemonScreen = ({
    route: {
        params: { id },
    },
}: {
    route: any;
}) => {
    const { getPokemonById, currentPokemon, loading, error } = useGetPokemonById();

    useEffect(() => {
        getPokemonById({ id });
    }, [getPokemonById, id]);

    return (
        <ScrollView>
            <Error error={error} />
            {loading || !currentPokemon ? (
                <View style={styles.loading}>
                    <Loading loading={loading} />
                </View>
            ) : (
                <View>
                    <PokemonScreenHeader />
                    <PokemonScreenType />
                </View>
            )}
        </ScrollView>
    );
};

export default PokemonScreen;
