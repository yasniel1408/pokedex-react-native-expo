import axiosInstance, { API } from './conf';

export const getPokemons = async (limit = 100, page = 0) => {
    const getPokeApi = await axiosInstance.get(`${API}pokemon?limit=${limit}&offset=${page}`);
    const {
        data: { results },
    } = getPokeApi;
    return results;
};

export const getPokemonsWithDetailsAPI = async () => {
    const {
        data: { results },
    } = await getPokemons();

    const result = await Promise.all(results.map((pokemon: any) => axiosInstance.get(pokemon.url)));
    return result
        .map((pokemon: any) => pokemon.data)
        .map((value: any) => {
            return {
                ...value,
                favorite: false,
            };
        });
};
