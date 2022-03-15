import { ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { FC, useEffect, useLayoutEffect } from 'react';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import PokemonScreenHeader from './components/PokemonScreenHeader';
import PokemonScreenType from './components/PokemonScreenType';
import styles from './styles';
import PokemonScreenStats from './components/PokemonScreenStats';
import { useGetPokemonById } from '../../redux/pokemon/hooks';
import PokemonScreenFavorite from './components/PokemonScreenFavorite';
import { useAuth } from '../../redux/user/hooks';

const PokemonScreen: FC<{
    navigation: any;
    route: any;
}> = ({
    navigation,
    route: {
        params: { id },
    },
}: {
    navigation: any;
    route: any;
}) => {
    const { loggedIn } = useAuth();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => loggedIn && <PokemonScreenFavorite id={id} />,
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
    }, [id, loggedIn, navigation]);

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
