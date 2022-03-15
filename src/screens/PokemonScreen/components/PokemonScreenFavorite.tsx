import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFavorite } from '../../../redux/pokemon/hooks';

const PokemonScreenFavorite: FC<{ id: number }> = ({ id }: { id: number }) => {
    const { markAsFavorite, removeAsFavorite, favorites } = useFavorite();

    const isFavorite: boolean = favorites?.some(({ id: idFav }) => idFav === id);

    return (
        <Icon
            name="heart"
            color="#fff"
            solid={isFavorite}
            size={20}
            onPress={() => (isFavorite ? removeAsFavorite({ id }) : markAsFavorite({ id }))}
        />
    );
};

export default PokemonScreenFavorite;
