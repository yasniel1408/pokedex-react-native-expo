import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MyPokemonType } from '../../../types';
import styles from './styles';
import getColorByPokemonType from '../../../utils/getColorByPokemonType';
import capitalizeString from '../../../utils/capitalize';

const PokedexScreenItem: FC<{ item: MyPokemonType }> = ({ item }: { item: MyPokemonType }) => {
    const pokemonColor = getColorByPokemonType({ type: item.type });
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

    const navigation: any = useNavigation();

    const goToPokemon = () => {
        navigation.navigate('Pokemon', { id: item.id });
    };

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>#{`${item.order}`.padStart(3, '')}</Text>
                        <Text style={styles.name}>{capitalizeString({ string: item.name })}</Text>
                        <Image source={{ uri: item.img }} style={styles.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default PokedexScreenItem;
