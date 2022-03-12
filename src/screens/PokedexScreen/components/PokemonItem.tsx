import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { MyPokemonType } from '../../../types';
import styles from './styles';

const PokemonItem = ({ item }: { item: MyPokemonType }) => {
    const goToPokemon = () => {
        console.log(`Vamos al pokemon: ${item.name}`);
        console.log(item);
    };

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>
                        <Text style={styles.number}>#{`${item.order}`.padStart(3, '')}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                        <Image source={{ uri: item.img }} style={styles.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default PokemonItem;
