import { POKEMON_TYPE_COLORS } from './colors';

const getColorByPokemonType = ({ type }: { type: string }) =>
    POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
