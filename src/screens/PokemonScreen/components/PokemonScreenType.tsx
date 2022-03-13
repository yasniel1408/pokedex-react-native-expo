import { Text, View } from 'react-native';
import React from 'react';
import useGetPokemonById from '../../../redux/pokemon/hooks/useGetPokemonById';
import styles from './styles';
import capitalizeString from '../../../utils/capitalize';
import getColorByPokemonType from '../../../utils/getColorByPokemonType';

const PokemonScreenType = () => {
    const {
        currentPokemon: { types },
    } = useGetPokemonById();

    return (
        <View style={styles.content}>
            {types?.map((item: any) => (
                <View
                    key={`${item.type.name}`}
                    style={{
                        ...styles.pill,
                        backgroundColor: getColorByPokemonType({ type: item.type.name }),
                    }}
                >
                    <Text>{capitalizeString({ string: item.type.name })}</Text>
                </View>
            ))}
        </View>
    );
};

export default PokemonScreenType;
