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
            {types.map(types, (item: any, index: number) => (
                <View
                    key={index}
                    style={{
                        ...styles.pill,
                        backgroundColor: getColorByPokemonType(item.type.name),
                    }}
                >
                    <Text>{capitalizeString(item.type.name)}</Text>
                </View>
            ))}
        </View>
    );
};

export default PokemonScreenType;
