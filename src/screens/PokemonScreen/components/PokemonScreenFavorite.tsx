import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFavorite } from '../../../redux/pokemon/hooks';

const PokemonScreenFavorite: FC<{ id: number }> = ({ id }: { id: number }) => {
    const { markAsFavorite } = useFavorite();

    return <Icon name="heart" color="#fff" size={20} onPress={() => markAsFavorite({ id })} />;
};

export default PokemonScreenFavorite;
