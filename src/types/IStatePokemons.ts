import IPokemon from "./IPokemon";

interface IStatePokemons {
  pokemons: IPokemon[];
  loading: Boolean;
  error: string;
}

export default IStatePokemons;
