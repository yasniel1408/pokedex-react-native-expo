import PokemonType from './DetailsOfPokemonType';

type PokemonInitialStateType = {
    pokemons: PokemonType[];
    loading: Boolean;
    error: string;
};

export default PokemonInitialStateType;
