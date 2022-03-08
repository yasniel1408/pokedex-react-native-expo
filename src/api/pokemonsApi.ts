import { PokemonType } from '../types';
import axiosInstance, { API } from './conf';

export const getPokemonsAPI = async ({
    limit = 100,
    page = 0,
}: {
    limit?: number;
    page?: number;
}): Promise<PokemonType[]> => {
    const {
        data: { results },
    } = await axiosInstance.get(`${API}pokemon?limit=${limit}&offset=${page}`);
    return results;
};

export const getPokemonDetailsByUrlAPI = async (url: string) => {
    const {
        data: { results },
    } = await axiosInstance.get(url);

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
