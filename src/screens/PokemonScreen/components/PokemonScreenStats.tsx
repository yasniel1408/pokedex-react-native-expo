import { Text, View } from 'react-native';
import React from 'react';
import useGetPokemonById from '../../../redux/pokemon/hooks/useGetPokemonById';
import capitalizeString from '../../../utils/capitalize';
import styles from './styles';
import { colors } from '../../../utils/colors';

const PokemonScreenStats = () => {
    const {
        currentPokemon: { stats },
    } = useGetPokemonById();

    const barStyles = (num: number) => {
        let color: string = colors.green;
        if (num < 30) color = colors.red;
        if (num > 30 && num < 85) color = colors.primary;
        return {
            backgroundColor: color,
            width: `${num}%`,
        };
    };

    return (
        <View style={styles.contentStats}>
            <Text style={styles.title}>Base Stats</Text>
            {stats.map((item: any) => (
                <View key={`${Date.now()}`} style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.statName}>
                            {capitalizeString({ string: item.stat.name })}
                        </Text>
                    </View>
                    <View style={styles.blockInfo}>
                        <Text style={styles.number}>{item.base_stat}</Text>
                        <View style={styles.bgBar}>
                            <View style={[styles.bar, barStyles(item.base_stat)]} />
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default PokemonScreenStats;
