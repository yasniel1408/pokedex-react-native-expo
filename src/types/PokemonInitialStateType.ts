import MyPokemonType from './MyPokemonType';

type PokemonInitialStateType = {
    pokemons?: MyPokemonType[];
    currentPokemon?: any;
    loading: Boolean;
    error: string;
};

export default PokemonInitialStateType;
