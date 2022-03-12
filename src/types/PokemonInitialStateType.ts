import MyPokemonType from './MyPokemonType';

type PokemonInitialStateType = {
    pokemons: MyPokemonType[];
    loading: Boolean;
    error: string;
};

export default PokemonInitialStateType;
