import React, { FC } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import useGetPokemonById from '../../../redux/pokemon/hooks/useGetPokemonById';
import capitalizeString from '../../../utils/capitalize';
import getColorByPokemonType from '../../../utils/getColorByPokemonType';
import styles from './styles';

const PokemonScreenHeader: FC = () => {
    const { currentPokemon } = useGetPokemonById();

    const color = getColorByPokemonType({ type: currentPokemon?.types[0]?.type?.name });

    const bgStyle = [{ backgroundColor: color, ...styles.background }];

    return (
        <>
            <View style={bgStyle} />
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>
                        {capitalizeString({ string: currentPokemon?.name })}
                    </Text>
                    <Text style={styles.order}>#{`${currentPokemon?.order}`.padStart(3, '0')}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image
                        source={{
                            uri: currentPokemon?.sprites?.other['official-artwork']?.front_default,
                        }}
                        style={styles.image}
                    />
                </View>
            </SafeAreaView>
        </>
    );
};

export default PokemonScreenHeader;
