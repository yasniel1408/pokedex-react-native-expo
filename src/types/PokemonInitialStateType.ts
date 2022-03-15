import MyPokemonType from './MyPokemonType';

type PokemonInitialStateType = {
    pokemons: MyPokemonType[];
    favorites: MyPokemonType[];
    currentPokemon?: any;
    loading: Boolean;
    error: string;
};

export default PokemonInitialStateType;
