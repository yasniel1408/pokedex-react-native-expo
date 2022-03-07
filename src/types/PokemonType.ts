type AbilityType = {
    is_hidden: boolean;
    slot: number;
    ability: any;
};

type PokemonType = {
    id: number;
    name: string;
    order: number;
    abilities: AbilityType[];
    base_experience: number;
    forms: any[];
    game_indices: any[];
    height: number;
    held_items: any[];
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    species: any;
    sprites: any;
    stats: any[];
    types: any[];
    weight: number;
    past_types: any[];
    favorite?: boolean;
    data?: any;
};

export default PokemonType;
