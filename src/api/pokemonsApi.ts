/* eslint-disable max-len */
import axiosInstance, { API } from './conf';

export const getPokemons = async () => {
    const getPokeApi = await axiosInstance.get(`${API}pokemon`);
    return getPokeApi;
};

// export const getPokemonsWithDetailsAPI = async () => {
//     const {
//         data: { results },
//     } = await getPokemons();

//     const result = await Promise.all(results.map((pokemon: any) => axiosInstance.get(pokemon.url)));
//     return result.map((pokemon: any) => pokemon.data);
// };
