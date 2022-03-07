import PokemonType from './PokemonType';

type PokemonInitialStateType = {
    pokemons: PokemonType[];
    loading: Boolean;
    error: string;
};

export default PokemonInitialStateType;
