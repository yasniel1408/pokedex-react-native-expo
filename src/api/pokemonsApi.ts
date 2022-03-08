import { DetailsOfPokemonType, PokemonType } from '../types';
import axiosInstance, { API } from './conf';

export const getPokemonsAPI = async ({
    limit = 10,
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

export const getPokemonDetailsByUrlAPI = async ({
    url,
}: {
    url: string;
}): Promise<DetailsOfPokemonType[]> => {
    const { data } = await axiosInstance.get(url);
    return data;
};
