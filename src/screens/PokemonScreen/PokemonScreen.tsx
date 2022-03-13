import { ScrollView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect, useLayoutEffect } from 'react';
import useGetPokemonById from '../../redux/pokemon/hooks/useGetPokemonById';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import PokemonScreenHeader from './components/PokemonScreenHeader';
import PokemonScreenType from './components/PokemonScreenType';
import styles from './styles';
import PokemonScreenStats from './components/PokemonScreenStats';

const PokemonScreen = ({
    navigation,
    route: {
        params: { id },
    },
}: {
    navigation: any;
    route: any;
}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => null,
            headerLeft: () => (
                <Icon
                    name="arrow-left"
                    color="#fff"
                    size={20}
                    style={{ marginLeft: 7 }}
                    onPress={navigation.goBack}
                />
            ),
        });
    }, [navigation]);

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
                    <PokemonScreenStats />
                </View>
            )}
        </ScrollView>
    );
};

export default PokemonScreen;
