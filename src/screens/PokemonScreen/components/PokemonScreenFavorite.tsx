import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PokemonScreenFavorite: FC<{ id: number }> = ({ id }: { id: number }) => {
    const addFavorite = () => {
        console.log('add to favorite', id);
    };

    return <Icon name="heart" color="#fff" size={20} onPress={() => addFavorite()} />;
};

export default PokemonScreenFavorite;
