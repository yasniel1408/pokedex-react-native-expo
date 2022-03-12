import { DetailsOfPokemonType, MyPokemonType } from '../types';
import axiosInstance, { API } from './conf';

export const getPokemonDetailsByUrlAPI = async ({ url }: { url: string }): Promise<any[]> => {
    return axiosInstance.get(url);
};

export const getPokemonsAPI = async ({
    limit,
    offset,
}: {
    limit?: number;
    offset?: number;
}): Promise<MyPokemonType[]> => {
    const {
        data: { results },
    } = await axiosInstance.get(`${API}pokemon?limit=${limit}&offset=${offset}`);
    const promises = results.map(({ url }: { url: string }) => getPokemonDetailsByUrlAPI({ url }));
    const result: any[] = await Promise.all(promises);
    const pokemonsArray: MyPokemonType[] = result.map(
        ({ data }: { data: DetailsOfPokemonType }) => ({
            id: data.id,
            name: data.name,
            type: data.types[0].type.name,
            order: data.order,
            img: data.sprites.other['official-artwork'].front_default,
        }),
    );
    return pokemonsArray;
};

export const getPokemonByIdAPI = async ({ id }: { id: number }): Promise<DetailsOfPokemonType> => {
    const result = await axiosInstance.get(`${API}pokemon/${id}`);
    console.log(result.data);
    return result.data;
};
