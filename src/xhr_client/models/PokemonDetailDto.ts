/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TypesInfoWithMetaDto } from './TypesInfoWithMetaDto';

export type PokemonDetailDto = {
    Pokedex?: number;
    Name?: string;
    LocalizedName?: string;
    Types?: Array<TypesInfoWithMetaDto>;
};

