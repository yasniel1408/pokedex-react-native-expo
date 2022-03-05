import axiosInstance, { API } from "./conf";

const getPokemons = (limit = 100, page = 0) => {
  const getPokeApi = axiosInstance.get(
    `${API}pokemon?limit=${limit}&offset=${page}`
  );
  return getPokeApi;
};

export const getPokemonsWithDetailsAPI = async (): Promise<any[]> => {
  let {
    data: { results },
  } = await getPokemons();

  const result = await Promise.all(
    results.map((pokemon: any) => axiosInstance.get(pokemon.url))
  );
  return result
    .map((pokemon: any) => pokemon.data)
    .map((value: any) => {
      return {
        ...value,
        favorite: false,
      };
    });
};
